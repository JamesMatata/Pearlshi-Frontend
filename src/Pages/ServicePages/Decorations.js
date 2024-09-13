import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//Icons
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Decorations = () => {
  return (
    <>
        <Helmet>
            <title>Decorations | Pearlshi Caterers & Event Planners</title>
        </Helmet>
          <body className='bg-[#FFFFFF] mt-[80px] md:mt-0 lg:mt-[125px]'>
            <section className='w-full relative'>
                <div className='h-full lg:h-screen'>
                    <img src={require('../../Assets/SlideShow/20240518104820_IMG_0416.jpg')} alt='' className='object-cover w-full h-full' />
                </div>
                <div className='absolute top-0 bg-black bg-opacity-[40%] w-full h-full'>
                    <div className='absolute bottom-[10%] md:bottom-[24%] left-[5%]'>
                        <h1 className='text-white text-4xl md:text-6xl lg:text-8xl font-semibold text-left font-["Inter"]'>Decorations</h1>
                        <p className='text-gray-200 text-sm md:text-md font-["Inter"] md:w-[75%]'>Transform your space with our bespoke decoration services, where creativity meets craftsmanship to bring your dream ambiance to life!</p>
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
                <div className='flex flex-wrap basis-[60%] gap-2 justify-center items-center md:space-y-0'>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                        <img src={require('../../Assets/SlideShow/20240518094352_IMG_0373 (1).jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                        <img src={require('../../Assets/SlideShow/IMG-20240515-WA0024.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                        <img src={require('../../Assets/SlideShow/20240518093908_IMG_0360.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                        <img src={require('../../Assets/SlideShow/20240518121639_IMG_0493.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                </div>
            </section>

            <section className='lg:flex flex-row-reverse justify-center gap-7 pt-3 pb-10'>
                <div className='basis-[60%] p-4'>
                    <h1 className='text-3xl font-semibold font-["Inter"]'>Decorations</h1>
                    <p className='font-["Inter"] text-md pt-5'>Our premier decorations service transforms any venue into a stunning and memorable setting tailored to your unique vision. Whether it's a wedding, corporate event, birthday party, or any special occasion, our expert decorators work closely with you to design a captivating atmosphere that reflects your style and theme. We offer a comprehensive range of decor options, including elegant table settings, breathtaking floral arrangements, exquisite lighting, and bespoke installations. Our team’s meticulous attention to detail ensures that every element harmoniously blends to create an enchanting ambiance that leaves a lasting impression on your guests.</p>
                    <p className='font-["Inter"] text-md pt-5'>In addition to traditional decorations, we provide customized solutions to meet your specific needs and preferences. Our services include the creation of personalized centerpieces, themed backdrops, and stylish props, all designed to elevate your event’s aesthetic appeal. We also handle the logistics of setup and takedown, allowing you to enjoy your event without any stress. With a commitment to excellence and a passion for creativity, our decorations service aims to exceed your expectations and bring your vision to life, making your event truly unforgettable.</p>
                    <div className='pt-7 flex flex-wrap gap-2  md:space-y-0 justify-center items-center'>
                        <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                            <img src={require('../../Assets/SlideShow/20240518094345_IMG_0372.jpg')} alt='' className='w-full h-full object-cover' />
                        </div>
                        <div data-aos="flip-right" data-aos-duration="2000" className='w-[90%] h-[200px] md:w-[350px] md:h-[250px]'>
                            <img src={require('../../Assets/SlideShow/20240518105255_IMG_0427.jpg')} alt='' className='w-full h-full object-cover' />
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

export default Decorations;