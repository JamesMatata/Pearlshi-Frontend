import React from 'react';

const SignUp = () => {
  return (
    <>
      <section 
        className="bg-center  bg-cover bg-no-repeat bg-fixed w-full lg:h-[350px] p-3"
        style={{backgroundImage: "url(https://images.unsplash.com/photo-1471138406156-7a89e687a062?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
      >
        <div>
          <h1 className="font-About text-white text-4xl md:text-6xl lg:text-7xl text-center py-5">Join Our Community</h1>
          <p className="text-[#D9D9D9] text-center text-md md:text-lg mt-3">Sign up to our newsletter to be the first to know of our various offers and discounts.</p>
          <form method="" className="lg:space-x-[50px] my-9 w-[90%] lg:w-[70%] mx-auto">
            <input type="text" name="Full Name" placeholder="Full Name" className="bg-[#D9D9D9] bg-opacity-[50%] mb-2 md:mr-3 lg:mr-0 outline-none py-3 px-4 w-[300px] rounded-md text-white"/>
            <input type="email" name="Email" placeholder="Email Address" className="bg-[#D9D9D9] bg-opacity-[50%] mb-2 outline-none py-3 px-4 w-[300px] rounded-md text-white"/>
            <input type="submit" name="submit" value="Sign Up" className="bg-[#C61313] px-7 py-2 text-lg  text-white font-semibold rounded-full hover:cursor-pointer"/>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignUp;