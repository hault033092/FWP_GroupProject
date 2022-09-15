import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import styled from 'styled-components'

import Person from '../components/Person'
import PersonDetailsPopup from '../components/PersonDetailsPopup'
import data from '../assets/persons'

const AboutUs = () => {
  const [activeSlider, setActiveSlider] = useState({
    isOpen: false,
    person: null,
  })
  const togglePopup = () => {
    setActiveSlider({ isOpen: false, person: null })
  }
  const modalHandler = () => {
    if (activeSlider.isOpen) {
      setActiveSlider({ isOpen: false, person: null })
    }
  }
  return (
    <div className='relative md:h-full bg-yellow-100 '>
      <div className='px-5 md:px-10 lg:px-18 pt-5 md:pt-10  '>
        <h1 className='text-xl md:text-2xl lg:text-4xl '>Meet our team</h1>
        <p className='md:w-1/2 text-base sm:text-lg mt-4'>
        We are a group of students from RMIT university. Although there are differences in personality, we have one thing in common: we all have a strong passion for Web programming.
        </p>
      </div>
      <div className=' flex md:h-full items-center  ' onClick={modalHandler}>
        <Marquee speed={120} pauseOnHover={false} play={!activeSlider.isOpen}>
          {data.map((person, index) => {
            return (
              <div
                className='hover:shadow-md shadow-gray-300'
                onClick={() => {
                  setActiveSlider({ isOpen: true, person })
                }}
                key={index}
              >
                <Person person={person} />
              </div>
            )
          })}
        </Marquee>
        {activeSlider.isOpen && (
          <PersonDetailsPopup
            closeHandler={togglePopup}
            person={activeSlider.person}
          />
        )}
      </div>
    </div>
  )
}

export default AboutUs
