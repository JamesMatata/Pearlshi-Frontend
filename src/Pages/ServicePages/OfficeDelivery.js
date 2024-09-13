import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//Icons
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const OfficeDelivery = () => {
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
                    <div className='absolute bottom-[10%] md:bottom-[30%] left-[5%]'>
                        <h1 className='text-white text-4xl md:text-6xl lg:text-8xl font-semibold text-left font-["Inter"]'>Office Delivery</h1>
                        <p className='text-gray-200 text-sm md:text-md font-["Inter"] md:w-[70%]'>Experience the convenience of productivity with our seamless office delivery service, ensuring your workspace is always fueled for success</p>
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
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                        <img src={require('../../Assets/SlideShow/WhatsApp Image 2024-05-30 at 12.24.33_10d707e5.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                        <img src={require('../../Assets/SlideShow/IMG-20240515-WA0033.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                        <img src={require('../../Assets/SlideShow/IMG-20240515-WA0023.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                        <img src={require('../../Assets/SlideShow/WhatsApp Image 2024-05-15 at 15.30.49_48f245ef.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                </div>
            </section>

            <section className='lg:flex flex-row-reverse justify-center gap-7 pt-3 pb-10'>
                <div className='basis-[60%] p-4'>
                    <h1 className='text-3xl font-semibold font-["Inter"]'>Office Delivery</h1>
                    <p className='font-["Inter"] text-md pt-5'>Our Office Delivery service is designed to bring high-quality, gourmet meals directly to your workplace, ensuring your team stays nourished and productive throughout the day. We offer a diverse menu that caters to all dietary preferences and restrictions, including vegetarian, vegan, gluten-free, and kosher options. Our meals are crafted from the freshest ingredients, emphasizing both flavor and nutrition. Whether you need breakfast, lunch, snacks, or a full day of catering, we provide prompt and professional delivery that fits seamlessly into your office schedule. Our flexible ordering system allows you to choose from individually packaged meals or family-style platters, ensuring safety and convenience for all employees</p>
                    <p className='font-["Inter"] text-md pt-5'>In addition to our meal delivery, our Office Delivery service includes setup and cleanup, allowing you to focus on your work without any added stress. We also offer customizable packages for meetings, corporate events, and special occasions, complete with all necessary utensils, napkins, and beverages. Our team of experienced event planners works closely with you to create a tailored dining experience that aligns with your company's needs and preferences. Trust [Company Name] to elevate your office dining with exceptional service and delectable cuisine, making every meal a delightful and memorable experience for your team.</p>
                    <div className='pt-7 flex flex-wrap gap-2 justify-center items-center'>
                        <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                            <img src={require('../../Assets/SlideShow/20240518094345_IMG_0372.jpg')} alt='' className='w-full h-full object-cover' />
                        </div>
                        <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
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

export default OfficeDelivery;