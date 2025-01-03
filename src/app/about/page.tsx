import React from 'react';
import Image from 'next/image';
import Side from '../../../public/14264311062633.560f0cf232eb9.jpg';

const About = () => {
  return (
    <main className="flex flex-col md:flex-row gap-5 mt-16 mx-5 md:mx-10 my-10 h-auto md:h-[450px]">
      {/* Right section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={Side}
          alt="photo"
          width={800}
          height={800}
          className="h-auto w-full md:w-[700px] object-cover"
        />
      </div>

      {/* Left section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 mt-5 md:mt-14 text-center md:text-left">
        <div className="bg-red-600 h-2 w-20 mx-auto md:mx-0 mb-5"></div>
        <h1 className="text-red-600 font-extrabold text-3xl md:text-5xl">Best Car</h1>
        <p className="text-2xl md:text-4xl text-gray-800">SERVICES</p>
        <p className="text-sm md:text-base lg:text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus laudantium perspiciatis repellendus commodi voluptates amet, nobis et similique explicabo laboriosam, itaque, sed impedit! Nesciunt unde error doloremque delectus quae asperiores!
        </p>
        <button className="bg-red-600 p-2 mt-5 text-white w-32 mx-auto md:mx-0 rounded-lg text-lg hover:bg-red-700 transition-colors">
          Shop
        </button>
      </div>
    </main>
  );
};

export default About;

































// import React from 'react'
// import Image from 'next/image'
// import Side from '../../../public/14264311062633.560f0cf232eb9.jpg'

// const About = () => {
//   return (
//     <main className='flex gap-5 mt-16 h-[450px] mx-10 my-10'>
//         {/* right section*/}

//     <div className=' w-96 md:w-[700px]   '> 
//     <Image
//      src={Side}
//       alt="photo"
//      width={800}
//      height={800}
//      className='flex justify-around h-[400px] w-[900px] '
//      />
//       </div>
//         {/* Left section*/} 
    
//     <div className=' w-6/12 h-96 gap-10  mt-14'>
//     <div className='bg-red-600 h-2 w-20 mb-5'></div>
//     <h1 className='text-red-600 font-extrabold  text-5xl'>Best Car</h1>
//     <p className='text-4xl text-gray-800'>SERVICES</p>
//     <br />
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus laudantium perspiciatis repellendus commodi voluptates amet, nobis et similique explicabo laboriosam, itaque, sed impedit! Nesciunt unde error doloremque delectus quae asperiores!</p>
//     <button className='bg-red-600 p-2 mt-5 text-white w-32 rounded-lg text-lg'>Shop</button>
//     </div>

    
     
//     </main>
//   )
// }

// export default About