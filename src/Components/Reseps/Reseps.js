import React from 'react'

import ResepsCard from '../ResepsCard/ResepsCard'
import Button from '../Button/Button'

import Pizza1 from '../../Assets/Images/Pizza1.png'
import Pizza2 from '../../Assets/Images/Pizza2.png'
import DonarImg from '../../Assets/Images/Donar.png'
import SalmonImg from '../../Assets/Images/Salmon.png'
import ChocoImg from '../../Assets/Images/Choco.png'
import DonutsImg from '../../Assets/Images/Donuts.png'
import UnicornImg from '../../Assets/Images/Unicorn.png'
import KebabImg from '../../Assets/Images/Kebab.png'

function Reseps() {
  return (
    <section className='pb-[250px]'>
        <div className='container'>
            <div>
                <h2 className='text-[38px] font-medium text-[#333333]'>Browser Our Category</h2>
                <strong className='text-[38px] font-medium text-[#8BAC3E] mb-[55px]'>Receipt</strong>
                <div className='flex items-center gap-[20px] flex-wrap mb-[68px]'>
                    <ResepsCard ImgSrc={Pizza1} bgColor={"#E6F3F5"} nameFood={"Pizza Paperoni"} nameFood2={"Pizza"}/>
                    <ResepsCard ImgSrc={Pizza2} bgColor={"#E6F3F5"} nameFood={"Pizza Meat"} nameFood2={"Pizza"}/>
                    <ResepsCard ImgSrc={DonarImg} bgColor={"#EAEEFA"} nameFood={"Doner Kebab"} nameFood2={"Kebab"}/>
                    <ResepsCard ImgSrc={SalmonImg} bgColor={"#F9EEF3"} nameFood={"Salmon Roll"} nameFood2={"Salmon"}/>
                    <ResepsCard ImgSrc={ChocoImg} bgColor={"#F0FEEB"} nameFood={"Cupcake Choco"} nameFood2={"Cupcake"}/>
                    <ResepsCard ImgSrc={DonutsImg} bgColor={"#F3F7D9"} nameFood={"Doughnut Milk"} nameFood2={"Doughnut"}/>
                    <ResepsCard ImgSrc={UnicornImg} bgColor={"#F3F7D9"} nameFood={"Doughnut Unicorn"} nameFood2={"Doughnut"}/>
                    <ResepsCard ImgSrc={KebabImg} bgColor={"#EAEEFA"} nameFood={"Kathi Kebab"} nameFood2={"Kebab"}/>
                </div>
                <div className='text-center'>
                    <Button title={"ALL Reciept"} width={160} fontSize={16}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reseps