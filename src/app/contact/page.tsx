import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl w-full p-8">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-4">Contact Us</h2>
        <p className="text-gray-400 text-center mb-8">
          Have questions or need assistance? Reach out to us below.
        </p>
        <form action="/send-message" method="POST">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-red-500 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-red-500 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-red-500 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-500 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;










































// import React from 'react';

// const Contact = () => {
//   return (
//     <div className='bg-blue-500 h-[450px]'>
//         <div className='bg-blue-300 w-[300px] h-[300px] ml-[500px]'>
//       <div className=''>
//         <h2 className='text-4xl mb-[100px]'>Registration Form</h2>
//         <br />
//         <form action="/search" method="get">
//           <div>
//             <label htmlFor="name">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your full name"
//               required
//               className=''
//             />
//           </div>
//           <br />
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <br />
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <br />
//           <button type="submit">Register</button>
//         </form>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;







































// // import React from 'react'
// // import Form from 'next/form'

// // const Contact = () => {
// //   return (
// //     <div>
        
// //     <div >
// //         <h2>Registration Form</h2>
// //         <Form action='/search'>
// //             <div >
// //                 <label >Full Name</label>
// //                 <input type="text" id="name" name="name" placeholder="Enter your full name" required/>
// //             </div>
// //             <div >
// //                 <label >Email</label>
// //                 <input type="email" id="email" name="email" placeholder="Enter your email" required/>
// //             </div>
// //             <div >
// //                 <label >Password</label>
// //                 <input type="password" id="password" name="password" placeholder="Enter your password" required/>
// //             </div>
// //             <button type="submit" >Register</button>
// //         </Form>
// //     </div>
// //     </div>
// //   )
// // }

// // export default Contact