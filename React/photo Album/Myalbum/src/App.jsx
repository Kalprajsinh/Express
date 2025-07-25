import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Testimonial1 from './testimonial1';

function App() {
  const [data, setData] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [albumImgs, setAlbumImgs] = useState([]);
  const [clickedAlbum, setClickedAlbum] = useState(null);
  const [openScreen, setOpenScreen] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/photos";

  async function getData() {
    const response = await axios.get(url);
    const data = response.data;

    setData(data);

    const album = data.map((item) => item.albumId);
    const uniqueAlbum = [...new Set(album)];
    setAlbums(uniqueAlbum);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (clickedAlbum !== null) {
      const albumImages = data.filter((item) => item.albumId === clickedAlbum);
      setAlbumImgs(albumImages);
    }
  }, [clickedAlbum, data]);

  return(
    <Testimonial1 />
  )

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 m-10">
        {albums.map((albumId) => (
          <div 
            key={albumId} 
            onClick={() => { setOpenScreen(true); setClickedAlbum(albumId); }}
            className={`h-32 bg-gray-700 rounded-lg flex justify-center items-center cursor-pointer ${openScreen ? 'hidden' : 'block'}`}
          >
            <p className="text-2xl font-bold text-white">{albumId}</p>
          </div>
        ))}
      </div>

      {openScreen && (
        <>
          <div className="w-[90%] h-[80%] m-20 absolute z-10 bg-gray-500 top-0 grid grid-cols-5 gap-5 overflow-y-scroll p-5">
            {albumImgs.length > 0 ? (
              albumImgs.map((imgItem) => (
                <div key={imgItem.id} className="bg-black bg-opacity-35 flex flex-col gap-5 rounded-lg">
                  <img className="rounded-lg"  src={`https://picsum.photos/200?random=${imgItem.id || index}`} alt="" />
                </div>
              ))
            ) : (
              <p>No images available for this album</p>
            )}
          </div>
          <button
            className="bg-black text-white rounded-full w-7 h-7 absolute top-16 right-20 z-20"
            onClick={() => setOpenScreen(false)}
          >
            X
          </button>
        </>
      )}
    </>
  );
}

export default App;
