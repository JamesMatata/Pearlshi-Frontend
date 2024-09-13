import React, { useState } from 'react';
import { Link } from 'react-router-dom';


//Icons
import { FaCopyright, FaFacebookSquare, FaInstagramSquare, FaPhoneAlt  } from "react-icons/fa";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { AiFillTikTok } from "react-icons/ai";





const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  

  return (
    <>
      <footer className='bg-header-700 w-full text-white md:flex justify-center gap-5 p-5'>
        <div className='my-3 font-["Inter"] basis-[30%]'>
          <h1 className='text-2xl font-bold my-3'>Find Us On</h1>
          <div className='flex  gap-1'>
            <span className='text-4xl text-header-500'>
              <a href="https://www.facebook.com/profile.php?id=100086976352392&mibextid=ZbWKwL" target='_blank'>
                <FaFacebookSquare className='hover:scale-125 ease-in-out transition-all duration-300'/>
              </a>
            </span>
            <span className='text-4xl text-header-500'>
              <a href="https://www.instagram.com/the_pearlshi_caterers?igsh=ZTRqdTRsZHNvbmtw" target='_blank'>
                <FaInstagramSquare className='hover:scale-125 ease-in-out transition-all duration-300'/>
              </a>
            </span>
            <span className='text-4xl text-header-500'>
              <a href="https://x.com/pearlshiCaterer?t=eEyZsG57PhY5sUmpq32pDg&s=09" target='_blank'>
                <FaSquareXTwitter className='hover:scale-125 ease-in-out transition-all duration-300'/>
              </a>
            </span>
            <span className='text-4xl text-header-500'>
              <a href="https://www.tiktok.com/@pearlshi_caterers?_t=8mMyz7LWFGv&_r=1" target='_blank'>
                <AiFillTikTok className='hover:scale-125 ease-in-out transition-all duration-300'/>
              </a>
            </span>
          </div>
        </div>
        <div className='basis-[30%]'>
          <h1 className='text-2xl font-semibold mt-3'>GET IN TOUCH</h1>
          <div className='flex space-x-4 pt-5'>
            <span className='text-3xl text-[#00ADEF]'>
              <FaLocationDot />
            </span>
            <p className='text-["Inter"]'>P.O Box 11-00518 Nairobi, Kenya</p>
          </div>
          <div className='flex space-x-4 pt-2'>
            <span className='text-3xl text-[#00ADEF] my-auto'>
              <MdAttachEmail />
            </span>
            <a href='mailto:pearlcaterers0205@gmail.com'>
              <p className='text-["Inter"] text-lg my-auto hover:text-[#00ADEF]'>pearlcaterers0205@gmail.com</p>
            </a>
          </div>
          <div className='flex space-x-4 pt-2'>
            <span className='text-2xl text-[#00ADEF] my-auto'>
              <FaPhoneAlt />
            </span>
            <div className='flex gap-2'>
              <a href='tel:+254-715-615-609'>
                <p className='text-["Inter"] hover:text-[#00ADEF]'>0715615609 /</p>
              </a>
              <a href='tel:+254759108174'>
                <p className='text-["Inter"] hover:text-[#00ADEF]'>0759108174</p>
              </a>
            </div>
          </div>
        </div>
        <div className='my-3 basis-[30%] mt-3'>
          <h1 className='text-2xl font-bold my-3'>EXPLORE</h1>
          <div>
            <ul className='text-md animate-pulse'>
              <li className='text-lg'><Link to="/aboutUs">About Us</Link></li>
              <li className='text-lg'><Link to="/booking">Book Now</Link></li>
              <li className='text-lg'><Link to="/connect">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className='w-[90px] h-[90px]  bottom-[1%] right-[0.5%] fixed'>
          <a href='https://wa.me/+254759108174' target='_blank'>
            <img src={require('../../Assets/whatsapp logo.png')} alt='' className='w-full h-full rounded-full' />
          </a>
        </div>
      </footer>
      <section className='bg-[#120F36] flex gap-2 justify-center w-full text-white py-3'>
        <span className='text-xl my-auto'>
          <FaCopyright />
        </span>
        <h4>Pearlshi Caterers & Event Planners {year}. All  rights Reserved.</h4>
      </section>
    </>
  )
}

export default Footer;