import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//Icons
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const BackdropHiring = () => {
  return (
    <>
        <Helmet>
            <title>Tents & Chairs For Hire | Pearlshi Caterers & Event Planners</title>
        </Helmet>
        <body className='bg-[#FFFFFF] mt-[80px] md:mt-0'>
            <section className='w-full relative'>
                <div className='h-full lg:h-screen'>
                    <img src={require('../../Assets/SlideShow/20240518094345_IMG_0372.jpg')} alt='' className='object-cover w-full h-full' />
                </div>
                <div className='absolute top-0 bg-black bg-opacity-[40%] w-full h-full'>
                    <div className='absolute bottom-[10%] md:bottom-[15%] left-[5%]'>
                        <h1 className='text-white text-4xl md:text-6xl lg:text-7xl font-semibold text-left font-["Inter"] md:w-[70%]'>Backdrop & Garlands For Hire</h1>
                        <p className='text-gray-200 text-sm md:text-md font-["Inter"] md:w-[70%]'>Elevate your event with our stunning Backdrops & Garlands for Hire service, transforming any space into a captivating oasis of elegance and charm.</p>
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
                <div className='flex flex-wrap basis-[60%] gap-4 justify-center items-center'>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                        <img src={require('../../Assets/SlideShow/IMG-20240515-WA0040.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                        <img src={require('../../Assets/SlideShow/WhatsApp Image 2024-05-28 at 09.32.09_514744c7.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                </div>
            </section>

            <section className='lg:flex flex-row-reverse justify-center gap-4 pt-3 pb-10'>
                <div className='basis-[60%] p-4'>
                    <h1 className='text-3xl font-semibold font-["Inter"]'>Backdrop & Garlands For Hire</h1>
                    <p className='font-["Inter"] text-md pt-5'>Our catering and event planning company proudly offers an exceptional service of backdrops and garlands for hire, designed to elevate the ambiance of any occasion. Our collection features a variety of stunning backdrops, ranging from elegant floral arrangements to modern geometric designs, suitable for weddings, corporate events, birthdays, and more. Each backdrop is meticulously crafted to provide a picture-perfect setting, ensuring your event is visually captivating and memorable. Complementing our backdrops, we offer a selection of garlands made from fresh, high-quality flowers and foliage, adding a touch of natural beauty and sophistication to any event décor.</p>
                    <p className='font-["Inter"] text-md pt-5'>Our backdrops and garlands are not only aesthetically pleasing but also customizable to match the specific theme and color scheme of your event. Our team of experienced designers works closely with clients to understand their vision and create bespoke arrangements that enhance the overall atmosphere. Whether you need a dramatic backdrop for a wedding ceremony or a whimsical garland for a birthday celebration, our service is tailored to meet your unique needs. With our commitment to quality and attention to detail, we aim to transform ordinary spaces into extraordinary experiences, leaving a lasting impression on your guests.</p>
                    <div className='pt-7 flex flex-wrap gap-2 justify-center items-center'>
                        <div className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                            <img src={require('../../Assets/SlideShow/20240518094345_IMG_0372.jpg')} alt='' className='w-full h-full object-cover' />
                        </div>
                        <div className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                            <img src={require('../../Assets/SlideShow/IMG-20240515-WA0045.jpg')} alt='' className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-2xl basis-[30%] p-4 space-y-5 h-[430px] w-[90%] mx-auto lg:w-auto'>
                    <h1 className='text-3xl text-center text-[#00ADEF] font-semibold'>Book With Us</h1>
                    <p className='text-md font-["Inter"]'>Discover the ultimate event experience with us! At Pearlshi Caterers & Event Planners, we transform your vision into reality, creating unforgettable moments tailored just for you. Book your next event with us and let’s make it extraordinary together. Your dream event starts here!</p>
                    <div className='flex flex-col items-center space-y-2'>
                        <Link to="/connect"><button className='bg-[#00ADEF] border-black text-white text-3xl w-[300px] py-2 text-center'>Hire Now</button></Link>
                        <Link to="/gallery"><button className='bg-[#C61313] text-white text-3xl w-[300px] py-2 text-center'>View Our Gallery</button></Link>
                    </div>
                </div>
            </section>
        </body>
    </>
  )
}

export default BackdropHiring;