import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//Icons
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const TableSetUp = () => {
  return (
    <>
      <Helmet>
        <title>Table Set Up | Pearlshi Caterers & Event Planners</title>
      </Helmet>
      <body className='bg-[#FFFFFF] mt-[80px] md:mt-0 lg:mt-[125px]'>
        <section className='w-full relative'>
            <div className='h-full lg:h-screen'>
              <img src={require('../../Assets/SlideShow/WhatsApp Image 2024-05-28 at 09.32.09_514744c7.jpg')} alt='' className='object-cover w-full h-full' />
            </div>
            <div className='absolute top-0 bg-black bg-opacity-[40%] w-full h-full'>
              <div className='absolute bottom-[10%] md:bottom-[30%] left-[5%]'>
                <h1 className='text-white text-4xl md:text-6xl lg:text-8xl font-semibold text-left font-["Inter"]'>Table Set Up</h1>
                <p className='text-gray-200 text-sm md:text-md font-["Inter"] md:w-[70%]'>Transform your dining experience with our bespoke table setup services, where elegance meets functionality, ensuring every meal becomes a memorable occasion.</p>
              </div>
            </div>
        </section>

        <section className='lg:flex  justify-center space-x-3 pt-10 pb-5'>
          <div className='bg-white p-3 basis-[30%] shadow-2xl  space-y-4 h-auto w-[90%] lg:w-auto mx-auto mb-4'>
            <h1 className='text-center text-3xl font-semibold text-[#00ADEF]'>Get In Touch</h1>
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
                <p className='text-["Inter"] text-lg hover:text-[#00ADEF]'>pearlcaterers0205@gmail.com</p>
              </a>
            </div>
            <div className='flex space-x-4 pt-2'>
              <span className='text-2xl text-[#00ADEF] my-auto'>
                <FaPhoneAlt />
              </span>
              <div className='flex gap-2'>
                  <a href='tel:0715615609'>
                    <p className='text-["Inter"] hover:text-[#00ADEF]'>0715615609 /</p>
                  </a>
                  <a href='tel:0759108174'>
                    <p className='text-["Inter"] hover:text-[#00ADEF]'>0759108174</p>
                  </a>
              </div>
            </div>
          </div>
                <div className='flex flex-wrap basis-[60%] gap-2 justify-center items-center'>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                        <img src={require('../../Assets/SlideShow/pearlshiTableSetUp.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                        <img src={require('../../Assets/SlideShow/IMG-20240515-WA0033.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                </div>
            </section>

            <section className='lg:flex flex-row-reverse justify-center gap-7 pt-3 pb-10'>
                <div className='basis-[60%] p-4'>
                    <h1 className='text-3xl font-semibold font-["Inter"]'>Table Set Up</h1>
                    <p className='font-["Inter"] text-md pt-5'>Our Table Set Up service, offered by our expert catering and event planning team, ensures that every event radiates elegance and precision from the moment your guests arrive. We meticulously arrange each table to reflect your event's theme and aesthetic, utilizing premium linens, elegant tableware, and tasteful centerpieces. Whether you envision a classic, rustic, or modern design, our team collaborates with you to bring your vision to life. We handle every detail with care, from the placement of napkins and silverware to the arrangement of floral decorations and table settings, ensuring a cohesive and stunning presentation.</p>
                    <p className='font-["Inter"] text-md pt-5'>Our service goes beyond mere aesthetics; it is designed to enhance the overall experience of your event. We consider the flow and functionality of the space, ensuring that tables are set to promote conversation and comfort. Our team is adept at creating layouts that maximize venue space while maintaining a sophisticated ambiance. With our Table Set Up service, you can trust that your event will not only look beautiful but also provide a seamless and enjoyable experience for your guests, leaving a lasting impression of elegance and professionalism.</p>
                    <div className='pt-7 flex flex-wrap gap-2 justify-center items-center'>
                        <div className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                          <img src={require('../../Assets/SlideShow/IMG-20240515-WA0034.jpg')} alt='' className='w-full h-full object-cover' />
                        </div>
                        <div className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                          <img src={require('../../Assets/SlideShow/IMG-20240515-WA0032.jpg')} alt='' className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-2xl basis-[30%] p-4 space-y-5 h-[430px] w-[90%] mx-auto lg:w-auto'>
                    <h1 className='text-3xl text-center text-[#00ADEF] font-semibold'>Book With Us</h1>
                    <p className='text-md font-["Inter"]'>Discover the ultimate event experience with us! At Pearlshi Caterers & Event Planners, we transform your vision into reality, creating unforgettable moments tailored just for you. Book your next event with us and let’s make it extraordinary together. Your dream event starts here!</p>
                    <div className='flex flex-col items-center space-y-2'>
                        <Link to="/booking"><button className='bg-[#00ADEF] border-black text-white text-3xl w-[300px] py-2 text-center'>Book Now</button></Link>
                        <Link to="/gallery"><button className='bg-[#C61313] text-white text-3xl w-[300px] py-2 text-center'>View Our Gallery</button></Link>
                    </div>
                </div>
            </section>
        </body>
    </>
  );
}

export default TableSetUp