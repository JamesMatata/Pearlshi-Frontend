import React, { useState } from 'react';
import Slider from 'react-slick';

//Images
import image1 from '../../Assets/SlideShow/20240518104846_IMG_0418.jpg';
import image2 from '../../Assets/SlideShow/20240518103713_IMG_0390.jpg';
import image3 from '../../Assets/SlideShow/20240518094120_IMG_0369.jpg';
import image4 from '../../Assets/SlideShow/WhatsApp Image 2024-05-30 at 12.24.33_d67cb860.jpg';
import image5 from '../../Assets/SlideShow/20240518091850_IMG_0339.jpg';
import image6 from '../../Assets/SlideShow/IMG-20240515-WA0033.jpg';
import image7 from '../../Assets/SlideShow/IMG-20240515-WA0034.jpg';
import image8 from '../../Assets/SlideShow/IMG-20240515-WA0041.jpg';
import image9 from '../../Assets/SlideShow/IMG-20240515-WA0037.jpg';
import image10 from '../../Assets/SlideShow/pearlshiTableSetUp.jpg';
import image11 from '../../Assets/SlideShow/20240518055737_IMG_0298.jpg';
import image12 from '../../Assets/SlideShow/20240518110428_IMG_0447.jpg';
import image13 from '../../Assets/SlideShow/20240518091129_IMG_0335.jpg';
import image14 from '../../Assets/SlideShow/20240518123510_IMG_0501.jpg';


//Slider Styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14];

const GalleryCarousel = () => {
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbSlider, setThumbSlider] = useState(null);

  const mainSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 2000,
    pauseOnHover: false,
    asNavFor: thumbSlider,
  };

  const thumbSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: mainSlider,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="flex justify-center items-center lg:w-[90%] md:w-[95%] w-[98%] mx-auto bg-black p-2 md:p-5 gap-2 md:gap-5">
      <div className="w-[20%] h-[300px] md:h-[500px] lg:h-screen overflow-hidden">
        <Slider
          {...thumbSettings}
          ref={(slider) => setThumbSlider(slider)}
          className="h-full"
        >
          {images.map((image, index) => (
            <div key={index} className="p-1">
              <img src={image} alt={image.alt} className="w-full h-full object-cover cursor-pointer" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-3/4 bg-black">
        <Slider
          {...mainSettings}
          ref={(slider) => setMainSlider(slider)}
        >
          {images.map((image, index) => (
            <div key={index} className='w-[50px]  h-[200px] md:h-[370px] lg:w-[90%] lg:h-[500px]'>
              <img src={image} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GalleryCarousel;
