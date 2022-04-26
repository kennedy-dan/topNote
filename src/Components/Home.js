import React from 'react'
import eventimg from '../assets/eventhome.svg'
import './Home.css'
const Home = () => {
  return (
      <div className='io'>
          <p className='mx-20 text-white text-2xl pt-5'>Event</p>
    <div className='sm:flex mx-20 justify-around my-20 sm:my-36'>
        <div className='uyu'>
            <p className='text-center text-3xl sm:text-left text-6xl xl:text-6xl sm:text-4xl md:text-4xl font-bold lg:text-5xl text-white '>We Help You Book Your Events </p>
            <div className='flex sm:block mb-14 justify-center'>
            <a href='/register' className='inline-block text-sm px-10 py-3 leading-none border mt-14 register text-white'>Register</a>

            </div>
        </div>
        <div className='eventimgContainer '>
            <img className='eventimg' src={eventimg} alt= 'home'/>
        </div>
    </div>
    </div>
  )
}

export default Home