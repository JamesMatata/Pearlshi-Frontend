import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//Icons
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



const EventPlanning = () => {
  return (
    <>
        <Helmet>
            <title>Event Planning & Management | Pearlshi Caterers & Event Planners</title>
        </Helmet>
        <body className='bg-[#FFFFFF] mt-[80px] md:mt-0 lg:mt-[125px]'>
            <section className='w-full relative'>
                <div className='h-full lg:h-screen'>
                    <img src={require('../../Assets/SlideShow/WhatsApp Image 2024-05-30 at 12.24.33_d67cb860.jpg')} alt='' className='object-cover w-full h-full' />
                </div>
                <div className='absolute top-0 bg-black bg-opacity-[40%] w-full h-full'>
                    <div className='absolute bottom-[10%] md:bottom-[20%] left-[2%] md:left-[5%]'>
                        <h1 className='text-white text-3xl md:text-6xl lg:text-7xl font-semibold text-left font-["Inter"] md:w-[70%]'>Event Planning & Event Management</h1>
                        <p className='text-gray-200 text-sm md:text-md font-["Inter"] md:w-[70%]'>Embark on a journey of seamless sophistication with our expert event planning and management services, where every detail is meticulously crafted to transform your vision into an unforgettable reality</p>
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
                            <p className='text-["Inter"] hover:text-[#00ADEF]'>pearlcaterers0205@gmail.com</p>
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
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px] '>
                        <img src={require('../../Assets/SlideShow/pearlshiTableSetUp.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px] '>
                        <img src={require('../../Assets/SlideShow/IMG-20240515-WA0033.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px] '>
                        <img src={require('../../Assets/SlideShow/IMG-20240515-WA0023.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px] '>
                        <img src={require('../../Assets/SlideShow/20240518055737_IMG_0298.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                </div>
            </section>

            <section className='lg:flex flex-row-reverse justify-center gap-7 pt-3 pb-10'>
                <div className='basis-[60%] p-4'>
                    <h1 className='text-3xl font-semibold font-["Inter"]'>Event Planning & Event Management Services</h1>
                    <p className='font-["Inter"] text-md pt-5'>Our comprehensive event planning and event management service is designed to transform your vision into reality with impeccable attention to detail and creativity. From intimate gatherings to grand celebrations, our team of experienced event planners will collaborate closely with you to understand your unique preferences and requirements. We offer a full suite of services, including theme conceptualization, venue selection, vendor coordination, and timeline creation. Our goal is to ensure a seamless and stress-free planning process, allowing you to enjoy the anticipation and excitement of your event without any hassle. With our expertise, every aspect of your event will be meticulously planned and flawlessly executed, ensuring an unforgettable experience for you and your guests.</p>
                    <p className='font-["Inter"] text-md pt-5'>On the day of the event, our skilled event management team takes over to orchestrate every element with precision and professionalism. We oversee the setup, manage the schedule, coordinate with vendors, and handle any unexpected challenges that may arise, ensuring everything runs smoothly from start to finish. Our commitment to excellence means that you can relax and immerse yourself in the moment, knowing that our team is dedicated to delivering an exceptional event. Whether it’s a corporate function, a wedding, a milestone celebration, or any other special occasion, our event management service is tailored to provide you with a worry-free and memorable experience, reflecting the highest standards of quality and elegance.</p>
                    <div className='pt-7 flex flex-wrap gap-2 justify-center items-center'>
                        <div className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]]'>
                            <img src={require('../../Assets/SlideShow/20240518094345_IMG_0372.jpg')} alt='' className='w-full h-full object-cover' />
                        </div>
                        <div className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]]'>
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
  )
}

export default EventPlanning;