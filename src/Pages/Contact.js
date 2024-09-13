import React from 'react';

//Icons
import { RiCustomerServiceLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";



function ContactPage() {
  return (
    <>
    <section className='bg-[#ffffff]'>
      <section className='w-full relative mt-[80px] lg:mt-[120px]'>
        <div className='h-52 md:h-64 lg:h-96'>
          <img src="https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='' className='object-cover w-full h-full' />
        </div>
        <div className='absolute top-0 bg-black bg-opacity-[40%] w-full h-full'>
          <div className='absolute bottom-[10%] md:bottom-[24%] left-[5%]'>
            <h1 className='text-white text-4xl md:text-6xl lg:text-7xl font-semibold text-left font-["Inter"]'>Contact Us</h1>
            <p className='text-gray-200 text-sm md:text-md font-["Inter"] md:w-[70%]'>Transform your event into an unforgettable experience—contact us today for personalized catering and event planning that will leave your guests in awe!</p>
          </div>
        </div>
      </section>

      <section className='w-[90%] mx-auto p-3 mt-[30px] font-["Inter"]'>
        <div className=' space-y-4'>
          <h4 className='text-[#00ADEF] text-lg font-["Inter"]'>Get In Touch</h4>
          <h1 className='text-3xl md:text-5xl '>Contact Us</h1>
          <p className='font-light font-md w-[90%]'>Do you need some help planning an event? Please fill in the form below.I look forward to receiving your enquiry and hearing more about your upcoming event!</p>
        </div>
        <div className='md:flex md:flex-wrap lg:flex-nowrap justify-around gap-7 space-y-3 lg:space-x-[50px] mt-[50px] md:mt-[100px] mb-[50px]'>
          <div className='flex gap-2'>
            <span className='text-[#00ADEF] text-4xl md:text-7xl'>
              <RiCustomerServiceLine />
            </span>
            <div>
              <h1 className='text-xl'>Phone</h1>
              <a href='tel:0715615609'>
                <p className='text-sm text-slate-600 hover:text-[#00ADEF]'>0715615609</p>
              </a>
              <a href='tel:0759108174'>
                <p className='text-sm text-slate-600 hover:text-[#00ADEF]'>0759108174</p>
              </a>
            </div>
          </div>
          <div className='flex gap-2'>
            <span className='text-[#00ADEF] text-4xl md:text-7xl'>
              <CiLocationOn />
            </span>
            <div>
              <h1 className='text-xl'>Address</h1>
              <p className='text-slate-600'>P.O Box 11-00518 Nairobi, Kenya</p>
            </div>
          </div>
          <div className='flex gap-2'>
            <span className='text-[#00ADEF] text-4xl md:text-7xl'>
              <MdOutlineEmail />
            </span>
            <div>
              <h1 className='text-xl'>E- Mail</h1>
              <a href='mailto:pearlcaterers0205@gmail.com'>
                <p className='text-slate-600 hover:text-[#00ADEF]'>pearlcaterers0205@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      
      <div className="lg:flex items-start  w-[90%] mx-auto bg-[#135a70] mb-10">
      {/* Image Section */}
      <div className="basis-[30%] h-[200px] md:h-[300px] lg:h-screen bg-gray-200 flex justify-center relative">
        <img
          src={require('../Assets/SlideShow/WhatsApp Image 2024-05-30 at 12.24.35_0c8c76e2.jpg')} alt='' className="w-full h-full object-cover" />
      </div>

      {/* Form Section */}
      <div className="w-full basis-[50%] p-6">
        <h1 className="font-semi bold text-3xl mb-4 text-white ">Get The Party Started</h1>
        <p className='text-white'>As the premier event planning company in the area. Each event and client is unique and we believe our services should be as well.</p>
        <form action="https://api.web3forms.com/submit" method="POST" className="md:grid grid-cols-2 gap-4 space-y-3 md:space-y-0">
          <input type="hidden" name="access_key" value="6152af76-4346-403d-a7b3-fdcfceaf5455"></input>
          <div>
            <label for="firstName" className="block text-sm font-medium text-white">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            /><br />
          </div>
          <div>
            <label for="lastName" className="block text-sm font-medium text-white">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Your Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-white">
              Your Number:
            </label>
            <input
              type="text"
              name="Phone Number"
              placeholder="Enter number"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Query:
            </label>
            <textarea
              name="Query"
              placeholder="Write your query here..."
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="col-span-2 w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </section>
    </>
  );
}

export default ContactPage;