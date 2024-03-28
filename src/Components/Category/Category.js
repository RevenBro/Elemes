import React from 'react'

import CategoryProduct from '../CategoryProduct/CategoryProduct'

import Cupcake from '../../Assets/Images/cupcake.svg'
import Pizza from '../../Assets/Images/pizza.svg'
import Kebab from '../../Assets/Images/kebab.svg'
import Salmon from '../../Assets/Images/salmon.svg'
import Donuts from '../../Assets/Images/donuts.svg'
import PrevIcon from '../../Assets/Images/prevIcon.svg'
import nextIcon from '../../Assets/Images/nextIcon.svg'

function Category() {
  return (
    <section className='pb-[110px]'>
        <div className='container'>
            <div>
                <h2 className='text-[38px] font-medium mb-[5px] leading-10'>Browser Our Category</h2>
                <span className='text-[38px] font-medium leading-10 text-[#8BAC3E]'>Receipt</span>
                <div className='mt-[42px] mb-[46px] flex items-start gap-[8px]'>
                    <CategoryProduct ImgSrc={Cupcake} title={"Cupcake"} number={"22"} width={47} height={52} bgColor={"#F0FEEB"}/>
                    <CategoryProduct ImgSrc={Pizza} title={"Pizza"} number={"25"} width={47} height={47} bgColor={"#E6F3F5"}/>
                    <CategoryProduct ImgSrc={Kebab} title={"Kebab"} number={"12"} width={47} height={47} bgColor={"#EAEEFA"}/>
                    <CategoryProduct ImgSrc={Salmon} title={"Salmon"} number={"22"} width={47} height={47} bgColor={"#F9EEF3"}/>
                    <CategoryProduct ImgSrc={Donuts} title={"Donuts"} number={"11"} width={51} height={47} bgColor={"#F3F7D9"}/>
                </div>
                <div className='flex items-center justify-end gap-[13px]'>
                  <button>
                    <img src={PrevIcon} width={113} height={50}/>
                  </button>
                  <button>
                    <img src={nextIcon} width={113} height={50}/>
                  </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category