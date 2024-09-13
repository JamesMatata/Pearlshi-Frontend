import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

//Icons
import { FaBirthdayCake } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";


//Components
import HeroCarousel from "../Components/Carousel/HeroCarousel";
import TopReviews from '../Components/Review/TopReviews'; 


const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Home | Pearlshi Caterers & Event Planners</title>
            </Helmet>
            <HeroCarousel />

            {/* About Section */}
            <section className="w-full bg-[#EBE4FF] pb-4 pt-5 space-y-5">
                <div data-aos="zoom-out-up" data-aos-duration="3000" className="w-[90%] md:w-[70%] mx-auto flex">
                    <div className="w-[16%] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0029.jpg')} 
                            alt="Pearlshi Events" 
                            className="w-full h-full object-cover overflow-hidden"
                        />
                    </div>
                    <div className="w-[16%] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px] hidden md:block overflow-hidden">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0036.jpg')} 
                            alt="Pearlshi Events" 
                            className="w-full h-full object-cover overflow-hidden"
                        />
                    </div>
                    <div className="w-[16%] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0030.jpg')} 
                            alt="Pearlshi Events" 
                            className="w-full h-full object-cover overflow-hidden"
                        />
                    </div>
                    <div className="w-[16%] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0025.jpg')} 
                            alt="Pearlshi Events" 
                            className="w-full h-full object-cover overflow-hidden"
                        />
                    </div>
                    <div className="w-[16%] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px] hidden md:block">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0052.jpg')} 
                            alt="Pearlshi Events" 
                            className="w-full h-full object-cover overflow-hidden"
                        />
                    </div>
                    <div className="w-[16%] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/20240518091902_IMG_0340.jpg')} 
                            alt="Pearlshi Events" 
                            className="w-full h-full object-cover overflow-hidden"
                        />
                    </div>
                    <div className="w-[16%] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/20240518105139_IMG_0420.jpg')} 
                            alt="Pearlshi Events" 
                            className="w-full h-full object-cover overflow-hidden"
                        />
                    </div>
                    <div className="w-[16%] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/20240518105346_IMG_0428.jpg')} 
                            alt="Pearlshi Events" 
                            className="w-full h-full object-cover overflow-hidden"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl md:text-8xl my-5 text-lighter font-About text-center">About Us</h1>
                    <p className="text-center w-[98%] md:w-[70%] mx-auto mb-10">Pearlshi Caterers and Event planners  is based in Nairobi, Kenya. We offer professional outside catering services. Our company is backed up by professional staff and specializes in offering high quality personalized and reliable catering services to our customers.</p>
                </div>
            </section>

            {/* What we do */}
            <section className="bg-black w-full p-4 pb-10 ">
                <h1 className="text-center text-white text-xl md:text-3xl lg:text-4xl font-['Roboto'] my-10">WHAT WE DO</h1>
                <div className="mx-auto w-[95%] lg:w-[65%] flex flex-wrap gap-5 mt-5 justify-center items-center">
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="100" className="relative group hover:cursor-pointer shadow-black shadow-2xl">
                        <Link to="/decorations">
                            <div className="h-[400px] w-[270px]">
                                <img src={require('../Assets/SlideShow/20240518121632_IMG_0492.jpg')} alt="" className="w-full h-full object-cover" /> 
                            </div>
                            <div className="absolute font-Open text-white bg-black  bg-opacity-75 w-full h-full lg:h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                                <h1 className="lg:hidden group-hover:block text-center pt-4 text-4xl font-semibold font-About">Decorations</h1>
                                <p className="lg:hidden group-hover:block text-center mt-10 p-3">Our premier decorations service transforms any event into a stunning and memorable occasion with personalized decor, meticulous attention to detail, and comprehensive setup and takedown, ensuring your vision comes to life seamlessly.</p>
                                <div className="lg:hidden group-hover:block absolute bottom-[10%] left-[30%] text-gray-200">
                                    <h4 className="inline-flex underline underline-offset-4 text-center ">Learn More</h4>
                                    <span className="inline-flex py-auto text-md">
                                        <IoChevronForward />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="100" className="relative mt-2 group hover:cursor-pointer shadow-black shadow-2xl">
                        <Link to="tableSetUp">
                            <div className="h-[400px] w-[270px]">
                                <img src={require('../Assets/SlideShow/pearlshiTableSetUp.jpg')} alt="" className="w-full h-full object-cover" /> 
                            </div>
                            <div className="absolute text-white bg-black bg-opacity-75 w-full h-full lg:h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                                <h1 className="text-white lg:hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Table Set Up</h1>
                                <p className="lg:hidden group-hover:block text-center mt-10 p-3 font-['Inter'] font-light">Our expert Table Set Up service ensures your event radiates elegance and precision, with meticulously arranged tables that reflect your theme and enhance guest experience, combining premium aesthetics with functional sophistication.</p>
                                <div className="lg:hidden group-hover:block absolute bottom-[10%] left-[30%] text-gray-200">
                                    <h4 className="inline-flex underline underline-offset-4 text-center ">Learn More</h4>
                                    <span className="inline-flex py-auto text-md">
                                        <IoChevronForward />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1200" data-aos-offset="100" className="relative group hover:cursor-pointer shadow-black shadow-2xl">
                        <Link to="floralRequisition">
                            <div className="h-[400px] w-[270px]">
                                <img src={require('../Assets/SlideShow/floral.jpg')} alt="" className="w-full h-full object-cover" /> 
                            </div>
                            <div className="absolute text-white bg-black bg-opacity-75 w-full h-full lg:h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                                <h1 className="text-white lg:hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Floral Requisition</h1>
                                <p className="lg:hidden group-hover:block text-center mt-10 p-3 font-['Inter'] font-light">Experience the elegance and beauty of custom floral arrangements with our Floral Requisition service, designed to enhance any occasion with meticulously crafted blooms, personalized consultation, and impeccable on-site setup.</p>
                                <div className="lg:hidden group-hover:block absolute bottom-[10%] left-[30%] text-gray-200">
                                    <h4 className="inline-flex underline underline-offset-4 text-center ">Learn More</h4>
                                    <span className="inline-flex py-auto text-md">
                                        <IoChevronForward />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="700" data-aos-offset="100" className="relative group hover:cursor-pointer shadow-black shadow-2xl">
                        <Link to="officeDelivery">
                            <div className="h-[400px] w-[270px]">
                                <img src={require('../Assets/SlideShow/IMG-20240515-WA0051.jpg')} alt="" className="w-full h-full object-cover" /> 
                            </div>
                            <div className="absolute text-white bg-black bg-opacity-75 w-full h-full lg:h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                                <h1 className="text-white lg:hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Office Delivery</h1>
                                <p className="lg:hidden group-hover:block text-center mt-10 p-3 font-['Inter'] font-light">
                                Enhance your workplace with our gourmet Office Delivery service, offering diverse, fresh meals and customizable packages, complete with setup and cleanup, to ensure a seamless, nutritious, and delightful dining experience for your team.</p>
                                <div className="lg:hidden group-hover:block absolute bottom-[10%] left-[30%] text-gray-200">
                                    <h4 className="inline-flex underline underline-offset-4 text-center ">Learn More</h4>
                                    <span className="inline-flex py-auto text-md">
                                        <IoChevronForward />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800" data-aos-offset="100" className="relative group hover:cursor-pointer shadow-black shadow-2xl">
                        <Link to="/tentHiring">
                            <div className="h-[400px] w-[270px]">
                                <img src={require('../Assets/SlideShow/TablesetUp.jpg')} alt="" className="w-full h-full object-cover" /> 
                            </div>
                            <div className="absolute text-white bg-black bg-opacity-75 w-full h-full lg:h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                                <h1 className="text-white lg:hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Tents & Chair Hiring</h1>
                                <p className="lg:hidden group-hover:block text-center mt-10 p-3 font-['Inter'] font-light">
                                Enhance your event with our comprehensive tents and chairs rental service, offering elegant and customizable setups with expert delivery, setup, and takedown for a seamless and stylish experience.</p>
                                <div className="lg:hidden group-hover:block absolute bottom-[10%] left-[30%] text-gray-200">
                                    <h4 className="inline-flex underline underline-offset-4 text-center ">Learn More</h4>
                                    <span className="inline-flex py-auto text-md">
                                        <IoChevronForward />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900" data-aos-offset="100" className="relative group hover:cursor-pointer shadow-black shadow-2xl">
                        <Link to="eventPlanning">
                            <div className="h-[400px] w-[270px]">
                                <img src={require('../Assets/SlideShow/IMG-20240515-WA0029.jpg')} alt="" className="w-full h-full object-cover" /> 
                            </div>
                            <div className="absolute text-white bg-black bg-opacity-75 w-full h-full lg:h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                                <h1 className="text-white lg:hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Event Planning & Management</h1>
                                <p className="lg:hidden group-hover:block text-center mt-10 p-3 font-['Inter'] font-light">Our catering and event planning company offers a wide range of customizable tents and chairs, ensuring your event is both comfortable and stylish, with seamless delivery, setup, and takedown by our expert team.</p>
                                <div className="lg:hidden group-hover:block absolute bottom-[10%] left-[30%] text-gray-200">
                                    <h4 className="inline-flex underline underline-offset-4 text-center ">Learn More</h4>
                                    <span className="inline-flex py-auto text-md">
                                        <IoChevronForward />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            </section>

            {/* Why Choose Us? */}
            <section className="font-['Inter'] w-full p-4 overflow-hidden">
                <h1 className="text-center py-5 text-2xl md:text-3xl font-bold font-['Inter'] text-header-500">Why Choose Us?</h1>
                <div className="flex flex-wrap gap-4 w-[95%] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="p-2 shadow-lg rounded-md flex space-x-4 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-5xl text-wedding-500 border rounded-full my-auto p-2">
                            <ion-icon name="document-text-sharp"></ion-icon>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Tailored Experience</h1>
                            <p className="text-md text-slate-600">We work closely with you to create a personalized menu that reflects your vision and preferences.</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className="p-2 shadow-lg rounded-md flex space-x-3 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-5xl text-wedding-800 border rounded-full my-auto p-2">
                            <ion-icon name="fast-food-sharp"></ion-icon>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Exceptional Quality</h1>
                            <p className="text-md text-slate-600">Our talented chefs use only the freshest, highest quality ingredients to craft delicious and visually stunning dishes.</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="2000" className="p-2 shadow-lg rounded-md flex space-x-3 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-5xl text-green-700 border rounded-full my-auto p-2">
                            <ion-icon name="restaurant-sharp"></ion-icon>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Professional Service</h1>
                            <p className="text-md text-slate-600">Our team is dedicated to providing professional, friendly, and reliable service, ensuring a seamless and stress-free event.</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="1000" data-aos-duration="2000" className="p-2 shadow-lg rounded-md flex space-x-3 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-5xl text-wedding-600 border rounded-full my-auto p-2">
                            <ion-icon name="bed-sharp"></ion-icon>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Attention to Detail</h1>
                            <p className="text-md text-slate-600">From the presentation of our dishes to the setup of your event, we pay attention to every detail to ensure perfection.</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="1100" data-aos-duration="2000" className="p-2 shadow-lg rounded-md flex space-x-3 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-5xl text-wedding-400 border rounded-full my-auto p-2">
                            <FaBirthdayCake />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Versatility</h1>
                            <p className="text-md text-slate-600">Whether it’s an intimate gathering, a corporate event, or a grand celebration, we have the expertise to cater to all types of events with style and elegancy.</p>
                        </div>
                    </div>
                </div>
            </section>

            <TopReviews />

            {/* Core Values */}
            <section className="bg-[#F5F2FB] p-7">
                <h4 className="text-[#00ADEF] text-center mt-5 font-Home">COMPANY</h4>
                <h1 className="text-center text-4xl mb-5 font-Home">Core Values</h1>
                <div className="bg-white w-[99%] md:w-[87%] mx-auto rounded-xl md:flex justify-center items-center gap-2">
                    <div className="basis-[40%] p-3">
                        <h1 className="text-3xl md:text-5xl font-semibold font-['Poppins'] text-center md:text-left">Our Promise Behind Every Event</h1>
                        <Link to="/connect" className="flex flex-col items-start"><button className='bg-[#00ADEF] mt-4 text-white font-semibold text-2xl px-5 py-2 rounded-tr-3xl rounded-bl-3xl lg:w-auto mb-3 lg:mb-0'>Reach Out</button></Link>
                    </div>
                    <div className="basis-[50%] space-y-3 p-2">
                        <div className="flex gap-2">
                            <div className="w-[90px] h-[90px] overflow-hidden rounded-lg">
                                <img src={require('../Assets/SlideShow/WhatsApp Image 2024-05-30 at 12.24.35_0c8c76e2.jpg')} alt="" className="w-full h-full object-cover rounded-lg hover:cursor-pointer hover:scale-150 ease-in-out transition-all duration-300" />
                            </div>
                            <div className="font-Home w-[70%] overflow-hidden rounded-lg">
                                <h1 className="text-xl">Integrity</h1>
                                <p className="text-sm text-wrap text-black/75">We conduct our business with honesty and transparency, fostering trust and long-lasting relationships with our clients and partners</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-[90px] h-[90px] overflow-hidden rounded-lg">
                                <img src="https://images.unsplash.com/photo-1527499861446-cc219aea45ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover rounded-lg hover:cursor-pointer hover:scale-150 ease-in-out transition-all duration-300" />
                            </div>
                            <div className="font-Home w-[70%]">
                                <h1 className="text-xl">Excellence</h1>
                                <p className="text-sm text-wrap text-black/75">We are committed to the highest standards of quality in every dish we create and every service we provide.</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-[90px] h-[90px] overflow-hidden rounded-lg">
                                <img src="https://images.unsplash.com/photo-1650847821830-2c24e212213f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover rounded-lg hover:cursor-pointer hover:scale-150 ease-in-out transition-all duration-300" />
                            </div>
                            <div className="font-Home w-[70%]">
                                <h1 className="text-xl">Passion</h1>
                                <p className="text-sm text-wrap text-black/75">Our love for food and dedication to exceptional service drive us to continually improve and perfect our craft.</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-[90px] h-[90px] overflow-hidden rounded-lg">
                                <img src="https://images.unsplash.com/photo-1625943555419-56a2cb596640?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover rounded-lg hover:cursor-pointer hover:scale-150 ease-in-out transition-all duration-300" />
                            </div>
                            <div className="font-Home w-[70%]">
                                <h1 className="text-xl">Sustainability</h1>
                                <p className="text-sm text-black/75">We are dedicated to sustainable practices, sourcing local and organic ingredients whenever possible to support our community and environment
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-[90px] h-[90px] overflow-hidden rounded-lg">
                                <img src="https://images.unsplash.com/photo-1518619745898-93e765966dcd?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover rounded-lg hover:cursor-pointer hover:scale-150 ease-in-out transition-all duration-300" />
                            </div>
                            <div className="font-Home w-[70%]">
                                <h1 className="text-xl">Creativity</h1>
                                <p className="text-sm text-black/75">We embrace innovation and creativity, offering unique and customized menus that reflect our clients’ tastes and preferences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;