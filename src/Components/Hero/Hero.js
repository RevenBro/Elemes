import React from 'react'

import Button from '../Button/Button'

import HeroImg from '../../Assets/Images/hero-img.png'

function Hero() {
  return (
    <section className='pb-[100px]'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div className='w-[482px]'>
                    <h1 className='text-[64px] text-[#8BAC3E] mb-[32px] font-medium leading-[64px]'>Good Food Us Good Mood</h1>
                    <p className='text-gray-700 text-[18px] font-normal leading-7 mb-[32px]'>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
                    <div className='flex items-center gap-[16px]'>
                        <Button additionalClass={"shadow-lg"} width={147} title={"Daftar Sekarang"} fontSize={14}/>
                        <button className='rounded-[100px] bg-gray-300 w-[98px] py-[10px] text-[#333333] text-[14px] font-medium leading-6'>About us</button>
                    </div>
                </div>
                <img src={HeroImg} width={651} height={50}/>
            </div>
        </div>
    </section>
  )
}

export default Hero