import React from 'react';
import { Link } from 'react-router-dom';

//components
import GalleryCarousel from '../Components/Carousel/GalleryCarousel'

const Gallery = () => {
  return (
    <>
        <body className='mt-[80px] md:mt-[100px] lg:mt-[120px] mb-10'>
          <section className='p-5 bg-gradient-to-r from-cyan-500 from-50% to-header-500 mb-8 md:py-10'>
            <h1 className='font-Mons text-3xl md:text-5xl px-5 md:px-10 text-white'>Gallery</h1>
            <div className='text-white space-x-3 px-5 md:px-10 text-md'>
              <Link to="/" className='hover:text-red-700'>Home  /</Link>
              <Link className='text-red-700'>Gallery</Link>
            </div>
          </section>
          <GalleryCarousel />
        </body>
    </>
  )
}

export default Gallery;