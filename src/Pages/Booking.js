import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Booking = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    package: '',
    event_name: '',
    guests: '',
    event_date: '',
    event_time: '',
    location: '',
    description: ''
  });

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/api/bookings/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newBooking = await response.json();
        console.log('Booking successful:', newBooking);
        // You can redirect or show a success message here
      } else {
        console.error('Booking failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Booking | Pearlshi Cateres & Event Planners</title>
      </Helmet>
      <body className='bg-[#F5F2FB] mt-[80px] md:mt-[100px] lg:mt-[120px]'>
        <section
          className="bg-center relative bg-cover bg-no-repeat bg-fixed w-full h-52 md:h-64 lg:h-[350px]"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522413452208-996ff3f3e740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
        >
          <div className='absolute top-0 w-full h-full bg-[#00ADEF] bg-opacity-[50%] font-Mons'>
            <div className='absolute bottom-[5%] md:bottom-[15%] lg:bottom-[25%] left-[4%]'>
              <h1 className='text-4xl md:text-7xl font-bold text-white'>Book Now</h1>
              <p className='text-gray-200 text-sm md:w-[60%]'>
                Transform your vision into a spectacular reality with our bespoke catering and event planning services...
              </p>
            </div>
          </div>
        </section>

        <section className='bg-[#135A70] w-[95%] mx-auto mt-[100px] md:flex justify-center items-center gap-3 p-4 mb-10'>
          <div className='text-white basis-[40%]'>
            <h1 className='font-["Inter"] text-3xl'>Book With Us</h1>
            <p className='text-emerald-200'>
              Elevate your next celebration to unforgettable heights with our premier catering and event planning services...
            </p>
          </div>

          {/* Book Now Form */}
          <div className='basis-[55%] bg-white p-3 mt-5'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-wrap gap-5'>
                <div className='text-md font-["Inter"]'>
                  <label>First Name</label>
                  <input type='text' name='first_name' placeholder='Enter First Name' value={formData.first_name} onChange={handleChange} className='block bg-[#F5F2FB] py-2 px-2 w-full md:w-[300px]' required />
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Last Name</label>
                  <input type='text' name='last_name' placeholder='Enter Last Name' value={formData.last_name} onChange={handleChange} className='block bg-[#F5F2FB] py-2 px-2 w-full md:w-[300px]' required />
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Phone Number</label>
                  <input type='text' name='phone_number' placeholder='Phone Number' value={formData.phone_number} onChange={handleChange} className='block bg-[#F5F2FB] py-2 px-2 w-full md:w-[300px]' required />
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Email Address</label>
                  <input type='email' name='email' placeholder='Enter Email Address' value={formData.email} onChange={handleChange} className='block bg-[#F5F2FB] py-2 px-2 w-full md:w-[300px]' required />
                </div>
              </div>

              <label>Choose a Package</label>
              <select name="package" value={formData.package} onChange={handleChange} className='w-full md:w-[300px] py-2 px-2 mt-3'>
                <option value="Event Planning">Event Planning</option>
                <option value="Caterers">Caterers</option>
                <option value="Both">Both</option>
              </select>

              <div className='flex flex-wrap gap-5'>
                <div className='text-md font-["Inter"]'>
                  <label>Type of Event</label>
                  <input type='text' name='event_name' placeholder='Type of Event' value={formData.event_name} onChange={handleChange} className='block bg-[#F5F2FB] py-2 px-2 w-full md:w-[300px]' required />
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Number of Guests</label>
                  <input type='number' name='guests' value={formData.guests} onChange={handleChange} className='block bg-[#F5F2FB] py-2 px-2 w-full md:w-[300px]' required />
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Date of Event</label>
                  <input type='date' name='event_date' min={getTodayDate()} value={formData.event_date} onChange={handleChange} className='block bg-[#F5F2FB] py-2 px-2 w-full md:w-[300px]' required />
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Time of Event</label>
                  <input type='time' name='event_time' value={formData.event_time} onChange={handleChange} className='block bg-[#F5F2FB] py-2 px-2 w-full md:w-[300px]' required />
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Location of Event</label>
                  <input type='text' name='location' value={formData.location} onChange={handleChange} className='block bg-[#F5F2FB] py-2 px-2 w-full md:w-[300px]' required />
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Description</label>
                  <textarea name='description' placeholder='Describe Your Event...' value={formData.description} onChange={handleChange} rows="6" className='bg-[#F5F2FB] p-2 block w-full md:w-[400px]' required />
                </div>
              </div>

              <input type='submit' value="Book Now" className='w-[70%] flex flex-col items-center justify-center my-5 py-3 bg-[#135A70] text-white text-xl font-["Inter"] hover:cursor-pointer' />
            </form>
          </div>
        </section>
      </body>
    </>
  )
}

export default Booking;
