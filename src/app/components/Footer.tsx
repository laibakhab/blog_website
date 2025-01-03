import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-8 p-6">
      <hr className="w-full max-w-4xl mx-auto mt-8" />
      <div className="flex flex-col md:flex-row justify-between gap-8 p-8 max-w-4xl mx-auto">
        {/* Car Rent Section */}
        <div className="flex-1">
          <h1 className="font-bold text-xl mb-5 hover:text-red-600 cursor-pointer">Car Rent</h1>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet<br />
            consectetur adipisicing elit. Eligendi <br />
            dolores porro veniam deserunt <br />
            eius, tempore expedita hic officiis <br />
            perferendis.
          </p>
        </div>

        {/* Account Section */}
        <div className="flex-1">
          <h1 className="font-bold text-xl mb-5 hover:text-red-600 cursor-pointer">Account</h1>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-600 cursor-pointer">Profile</li>
            <li className="hover:text-red-600 cursor-pointer">Setting</li>
            <li className="hover:text-red-600 cursor-pointer">Billing</li>
            <li className="hover:text-red-600 cursor-pointer">Notification</li>
          </ul>
        </div>

        {/* About Section */}
        <div className="flex-1">
          <h1 className="font-bold text-xl mb-5 hover:text-red-600 cursor-pointer">About</h1>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-600 cursor-pointer">Services</li>
            <li className="hover:text-red-600 cursor-pointer">Pricing</li>
            <li className="hover:text-red-600 cursor-pointer">Contact</li>
            <li className="hover:text-red-600 cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="flex-1">
          <h1 className="font-bold text-xl mb-5 hover:text-red-600 cursor-pointer">Company</h1>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-600 cursor-pointer">Community</li>
            <li className="hover:text-red-600 cursor-pointer">Help Center</li>
            <li className="hover:text-red-600 cursor-pointer">Support</li>
          </ul>
        </div>
      </div>
      <hr className="w-full max-w-4xl mx-auto" />
      <div className="text-center mt-6">
        <p>&copy; 2023 Colorful Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



















// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//         <footer className="bg-black p-4 text-white mt-8 ">
//           <hr className='w-[1000px] ml-[200px] mt-[50px]'  />
//           <div className='flex p-14 ml-[150px]'>
//             <div className='w-[400px] '>
//               <h1 className='font-bold text-xl mb-5 hover:text-red-600'>Car Rent</h1>
//               <p>
//                 Lorem, ipsum dolor sit amet <br />consectetur adipisicing elit. Eligendi <br /> dolores porro veniam deserunt <br /> eius, tempore expedita hic officiis <br /> perferendis 
//               </p>
//             </div>

//             <div className='w-[200px]'>
//               <h1 className='font-bold text-xl mb-5 hover:text-red-600'>Account</h1>
//               <ul>
//                 <li>Profile</li>
//                 <li>Setting</li>
//                 <li>Billing</li>
//                 <li>Notification</li>
//               </ul>
//             </div>

//             <div className='w-[200px]'>
//               <h1 className='font-bold text-xl mb-5 hover:text-red-600'>About</h1>
//               <ul>
//                 <li>Services</li>
//                 <li>Pricing</li>
//                 <li>Contact</li>
//                 <li>Careers</li>
//               </ul>
//             </div>

//             <div>
//               <h1 className='font-bold text-xl mb-5 hover:text-red-600'>Company</h1>
//               <ul>
//                 <li>Community</li>
//                 <li>Help Center</li>
//                 <li>Support</li>
//               </ul>
//             </div>
//           </div>
//           <hr className='w-[1000px] ml-[200px]'  />
//           <div className=" ml-[200px] mt-[20px]">
//             <p className='h-20'>&copy; 2023 Colorful Blog. All rights reserved.</p>
//           </div>
//         </footer>
//     </div>
//   )
// }

// export default Footer