import React from 'react'

import SiteLogo from '../../Assets/Images/SiteLoog.svg'
import { Mail } from '../../Assets/icons'
import { Phone } from '../../Assets/icons'
import { Insta } from '../../Assets/icons'
import MailIcon from '../../Assets/Images/mail-icon.svg'
import PhoneIcon from '../../Assets/Images/phone-icon.svg'

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='flex justify-between bg-[#F9FFF7] mb-[48px] pt-[79px] px-[65px] pb-[40px] rounded-[20px]'>
          <ul className='w-[335px]'>
            <li>
              <img className='mb-[21px]' src={SiteLogo} width={207} height={50}/>
            </li>
            <li>
              <p className='text-[14px] mb-[33px] font-normal leading-5'>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,Kecamatan Setiabudi, Kota Jakarta Selatan,Daerah Khusus Ibukota Jakarta 12950</p>
            </li>
            <li>
              <div>
                <ul className='flex items-center gap-[33px]'>
                  <li className='hover:bg-[#8BAC3E] p-[10px] cursor-pointer hover:text-white hover:rounded-[50%]'>
                    <Mail/>
                  </li>
                  <li className='hover:bg-[#8BAC3E] p-[10px] cursor-pointer hover:text-white rounded-[50%]'>
                    <Phone/>
                  </li>
                  <li className='hover:bg-[#8BAC3E] p-[10px] cursor-pointer hover:text-white rounded-[50%]'>
                    <Insta/>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <ul>
            <li className='mb-[33px]'>
              <strong className='text-[#333333] text-[18px] leading-5'>Categories</strong>
            </li>
            <li className='mb-[19px]'>
              <a href={"#"} className='text-[#757575] text-[14px] leading-4'>Cupcake</a>
            </li>
            <li className='mb-[19px]'>
              <a href={"#"} className='text-[#757575] text-[14px] leading-4'>Pizza</a>
            </li>
            <li className='mb-[19px]'>
              <a href={"#"} className='text-[#757575] text-[14px] leading-4'>Kebab</a>
            </li>
            <li className='mb-[19px]'>
              <a href={"#"} className='text-[#757575] text-[14px] leading-4'>Salmon</a>
            </li>
            <li>
              <a href={"#"} className='text-[#757575] text-[14px] leading-4'>Dognuth</a>
            </li>
          </ul>

          <ul>
            <li className='mb-[33px]'>
              <strong className='text-[#333333] text-[18px] leading-5'>About us</strong>
            </li>
            <li className='mb-[19px]'>
              <a href={"#"} className='text-[#757575] text-[14px] leading-4'>FAQ</a>
            </li>
            <li>
              <a href={"#"} className='text-[#757575] text-[14px] leading-4'>Report Problem</a>
            </li>
          </ul>

          <ul className='w-[250px]'>
            <li className='mb-[33px]'>
              <strong className='text-[#333333] text-[18px] leading-5'>Newsletter</strong>
            </li>
            <li className='mb-[19px]'>
              <p className='text-[#757575] text-[14px] font-medium leading-6'>Get now free 50% discount for alll products on your first order</p>
            </li>
            <li className='mb-[19px]'>
              <form method={"POST"} action={"https://echo.htmlacademy.ru"}>
                <label className='footer-input-wrap flex relative'>
                  <input className='footer-input rounded-[7px] bg-[#F9FFF7] w-[250px]' name={"userEmail"} type={"email"} required autoComplete={"off"} placeholder={"Your email address"}/>
                  <button className='absolute top-0 bottom-0 right-0' type={"submit"}>SEND</button>
                </label>
              </form>
            </li>
            <li className='flex items-center mb-[10px] gap-[6px]'>
              <img src={MailIcon} width={15} height={15}/>
              <a href={"mailto:elemesid@gmail.com"}>elemesid@gmail.com</a>
            </li>
            <li className='flex items-center gap-[6px]'>
              <img src={PhoneIcon} width={15} height={15}/>
              <a href={"tel: 0888 1111 2222 "}>0888 1111 2222</a>
            </li>
          </ul>
        </div>

        <div className='mb-[20px]'>
          <p className='text-[#757575] text-center text-[12px] font-normal leading-4 tracking-[5%]'>© 2021 Elemes id. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer