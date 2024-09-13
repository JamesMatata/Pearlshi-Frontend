import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
    const settingsLg = {
        fade: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        pauseOnHover: false
    }

    return (
        <>
            <div className="hidden lg:block mt-[120px] overflow-hidden">
                <Slider {...settingsLg}>
                    <div className="h-screen relative w-full ">
                        <div className="w-full h-screen">
                            <img src={require('../../Assets/SlideShow/IMG-20240515-WA0004.jpg')} alt="Pearlshi Caterers" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-[40%] left-[10%]">
                            <h1 className="text-white font-bold text-7xl font-Home drop-shadow-lg">Pearlshi Caterers</h1>
                            <p className="text-xl text-header-200 drop-shadow-md">Turning Your Dreams into Delicious Realities</p>
                        </div>
                    </div>
                    <div className="h-screen relative w-full">
                        <div  className="w-full h-screen">
                            <img src={require('../../Assets/SlideShow/20240518105255_IMG_0427.jpg')} alt="Pearlshi Caterers" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-[25%] left-[5%] font-['Inter'] w-[70%]">
                            <h1 className="text-white font-bold text-6xl font-Home drop-shadow-lg">Event Planning & Event Management</h1>
                            <p className="text-lg text-header-200 mt-3 drop-shadow-md">Your Vision, Our Expertise – Perfectly Planned Events</p>
                        </div>
                    </div>
                    <div className="h-screen relative w-full">
                        <div  className="w-full h-screen">
                            <img src={require('../../Assets/SlideShow/WhatsApp Image 2024-05-30 at 12.24.33_d67cb860.jpg')} alt="Pearlshi Caterers" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-[35%] left-[8%] font-['Inter']">
                            <h1 className="text-white font-bold text-8xl font-Home drop-shadow-lg">Pearlshi Events</h1>
                            <p className="text-lg text-header-200 drop-shadow-md">Creating Celebrations with a Personal Touch</p>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="hidden md:block lg:hidden mt-[100px] overflow-hidden">
                <Slider {...settingsLg}>
                    <div className="h-[500px] w-full relative">
                        <div className="h-[500px] w-full overflow-hidden">
                            <img src={require('../../Assets/SlideShow/IMG-20240515-WA0004.jpg')} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-[50%] left-[2%]">
                            <h1 className="text-white text-7xl font-[Inter]">Pearlshi Events</h1>
                            <p className="text-xl text-header-200">Turning Your Dreams into Delicious Realities</p>
                        </div>
                    </div>
                    <div className="h-[500px] relative w-full">
                        <div className="h-[500px] w-full overflow-hidden">
                            <img src={require('../../Assets/SlideShow/20240518105255_IMG_0427.jpg')} alt="Pearlshi Caterers" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute  top-[50%] left-[2%]  font-[Inter]">
                            <h1 className="text-white text-6xl font-[Inter]">Event Planning & Event Management</h1>
                            <p className="text-xl text-header-200">Your Vision, Our Expertise – Perfectly Planned Events</p>
                        </div>
                    </div>
                    <div className="h-[500px] w-full relative">
                        <div className="h-[500px] w-full overflow-hidden">
                            <img src={require('../../Assets/SlideShow/WhatsApp Image 2024-05-30 at 12.24.33_d67cb860.jpg')} alt="Pearlshi Caterers" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-[50%] left-[1%] p-10">
                            <h1 className="text-white text-6xl font-[Inter]">Pearlshi Events</h1>
                            <p className="text-xl text-header-200">Creating Celebrations with a Personal Touch</p>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="md:hidden mt-[80px] overflow-hidden">
                <Slider {...settingsLg}>
                    <div className="h-[250px] relative w-full">
                        <div className="h-[250px] w-full overflow-hidden">
                            <img src={require('../../Assets/SlideShow/IMG-20240515-WA0004.jpg')} alt="Pearlshi Caterers" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-[50%] left-[1%] p-2 font-Open">
                            <h1 className="text-white text-4xl font-semibold">Pearlshi Events</h1>
                            <p className="text-md text-header-200 ">Turning Your Dreams into Delicious Realities</p>
                        </div>
                    </div>
                    <div className="h-[250px] relative w-full">
                        <div className="h-[250px] w-full overflow-hidden">
                            <img src={require('../../Assets/SlideShow/20240518105255_IMG_0427.jpg')} alt="Pearlshi Caterers" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-[45%] left-[1%]  p-2 font-Open">
                            <h1 className="text-white text-3xl font-semibold">Event Planning & Event Management</h1>
                            <p className="text-md text-header-200">Your Vision, Our Expertise – Perfectly Planned Events</p>
                        </div>
                    </div>
                    <div className="h-[250px] relative w-full">
                        <div className="h-[250px] w-full overflow-hidden">
                            <img src={require('../../Assets/SlideShow/WhatsApp Image 2024-05-30 at 12.24.33_d67cb860.jpg')} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-[45%] left-0 p-4 font-Open">
                            <h1 className="text-white text-4xl font-semibold">Pearlshi Events</h1>
                            <p className="text-xl text-header-200">Creating Celebrations with a Personal Touch</p>
                        </div>
                    </div>
                </Slider>
            </div>

            
        </>
    );
}

export default HeroCarousel;