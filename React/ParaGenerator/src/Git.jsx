import { useState } from "react"

function GitCard()
{
    const [usename , setusername] = useState("") 
    const [userdata , setuserdata] = useState([])

    async function getdata(){
        const responce = await fetch(`https://api.github.com/users/${usename}`)
        const data = await responce.json()
        setuserdata(data)
    }
    return(
        <>
        <div className="mx-auto w-1/2 bg-gray-900 rounded-lg">
            <h1 className="text-3xl font-bold text-white text-center">GitCard</h1>
            <div className="flex justify-center items-center m-10 gap-5">
            <input type="text" className="border w-3/4 bg-gray-900 p-3 text-white rounded-lg" placeholder="Enter Youe GitHub username" onChange={ (e) => setusername(e.target.value)}/>
            <button className="border w-1/4 bg-black text-white font-bold rounded-lg h-12" onClick={getdata}>Submit</button>
            </div>

            <div className=" text-white font-semibold m-10">
            {userdata && userdata.name ? (
                <div>
                    <div className="flex items-center gap-5">
                        <img src={userdata.avatar_url} alt="" width={70} className="rounded-full"/>
                        <p>{userdata.name} - {userdata.bio}</p>
                    </div>
                    <p>Username: {userdata.login}</p>
                    <p>Location: {userdata.location}</p>
                    <p>Followers: {userdata.followers}</p>
                    <p>Following: {userdata.following}</p>
                    <p>Public Repos: {userdata.public_repos}</p>
                    <p>Created At: {userdata.created_at}</p>
                    <br />
                    <p>Url : <a href={userdata.html_url} className=" underline text-blue-400">{userdata.html_url}</a></p>
                </div>
            ) : (
                <h1>Enter Your GitHub username</h1>
            )}
            </div>
            <br />
        </div>
        <br />
    </>
    )
}

export default GitCard