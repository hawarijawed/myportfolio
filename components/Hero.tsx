import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGeneratorEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow, FaStar } from 'react-icons/fa';
const Hero = () => {
  return (
    <div className='pb-20 pt-36 color-white text-teal-200'>
      <div>
        <Spotlight className='-top-40 -left-10 mid:-left-32
           mid:-top-20 h-screen' fill='white'/>

        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>

        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>
      
      <div className="h-screen w-full dark:bg-black-100 bg-white  
      dark:bg-grid-white/[0.1] bg-grid-black/[0.1] 
      absolut flex items-center justify-center ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white 
      [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    
      <div className='flex justify-center relative my-20
      z-10'>
        <div className='max-w-[89vw] md:max-w-2xl
        lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest
          text-xs text-center text-blue-100 max-w-80'>
          Dynamic Web Magic with NEXT.js
          </h2>

          <TextGenerateEffect 
            className='text-center text-[49px] md:text-5xl lg:text-6xl mb-5 leading-relaxed'
            words='Bringing Your Imagination into Realities, Transforming Concepts into Seamless Experiences'
            filter={false}
            duration={2}
          />
          <p className='text-center md:tracking-wider
            md-4 text-sm md:text-lg lg:text-2xl'>
            Hey, I&apos;m Jawed Hawari, A full Stack Developer
          </p>
          <a href='#about' className='mt-4'>
            <MagicButton 
            title="Show My Work" 
            icon={<FaLocationArrow  />}  // Passing an icon component
            position="top-right"
            handleClick={() => console.log('Button clicked!')}
            />
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
