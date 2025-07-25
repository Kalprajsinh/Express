import React from 'react'

function Testimonial1() {

    const data = [
        {
          name: 'Jane Doe',
          title: 'CEO',
          image: 'https://randomuser.me/api/portraits/men/32.jpg', // Replace with your own image if needed
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Cursus elementum magna ut duis pulvinar tincidunt vivanus adipiscing quam. Eget dui quis etiam sed est',
            star: 5,
        },
        {
            name: 'Jane Doe',
            title: 'CEO',
            image: 'https://randomuser.me/api/portraits/men/32.jpg', // Replace with your own image if needed
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Cursus elementum magna ut duis pulvinar tincidunt vivanus adipiscing quam. Eget dui quis etiam sed est',
                star: 4,
          },
        {
          name: 'Jane Doe',
          title: 'CEO',
          image: 'https://randomuser.me/api/portraits/men/32.jpg', // Replace with your own image if needed
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Cursus elementum magna ut duis pulvinar tincidunt vivanus adipiscing quam. Eget dui quis etiam sed est',
            star: 1,
        },
        {
            name: 'Jane Doe',
            title: 'CEO',
            image: 'https://randomuser.me/api/portraits/men/32.jpg', // Replace with your own image if needed
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Cursus elementum magna ut duis pulvinar tincidunt vivanus adipiscing quam. Eget dui quis etiam sed est',
                star: 2,
          },
        {
          name: 'Jane Doe',
          title: 'CEO',
          image: 'https://randomuser.me/api/portraits/men/32.jpg', // Replace with your own image if needed
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Cursus elementum magna ut duis pulvinar tincidunt vivanus adipiscing quam. Eget dui quis etiam sed est',
            star: 3,
        },
        {
            name: 'Jane Doe',
            title: 'CEO',
            image: 'https://randomuser.me/api/portraits/men/32.jpg', // Replace with your own image if needed
            text:
              'Lorem ipsum dolor sit amet',
                star: 4,
          },
        {
          name: 'Jane Doe',
          title: 'CEO',
          image: 'https://randomuser.me/api/portraits/men/32.jpg', // Replace with your own image if needed
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Cursus elementum magna ut duis pulvinar tincidunt vivanus adipiscing quam. Eget dui quis etiam sed est',
            star: 5,
        },
         
      ];

  return (
    <>
    <h2 className="text-3xl font-bold text-center p-4">Testimonials</h2>
    <div className='flex justify-center items-center'>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {data.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 max-w-md">
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full object-cover mr-4"
            src={item.image}
            alt={item.name}
          />
          <div>
            <h4 className="text-lg font-semibold">{item.name}</h4>
            <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < item.star ? "text-yellow-500" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>
          </div>
        </div>
        <p className="text-gray-800">
          "{item.text}"
        </p>
      </div>
        )
    )}
    </div>
    </div>
    </>
  )
}

export default Testimonial1;