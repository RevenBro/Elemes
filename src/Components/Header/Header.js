import React from 'react'

import Button from '../Button/Button'

import SiteLogo from '../../Assets/Images/SiteLoog.svg'
import NavbarIcon from '../../Assets/Images/navbar-top-icon.svg'

function Header() {
  return (
    <header className='pt-[19px] pb-[27px]'>
        <div className='container mx-auto'>
            <div className='flex items-center justify-between'>
                <a className='inline-block' href={"/"}>
                    <img src={SiteLogo} width={207} height={50} alt={"Site Logo"}/>
                </a>
                <nav>
                    <ul className='flex items-center gap-[32px]'>
                        <li>
                            <a href={"#"} className='text-[14px] font-medium leading-6 text-[#757575] hover:text-black'>Home</a>
                        </li>
                        <li>
                            <a href={"#"} className='text-[14px] font-medium leading-6 text-[#757575] hover:text-black'>About</a>
                        </li>
                        <li className='relative'>
                            <a href={"#"} className='text-[14px] font-medium leading-6 text-[#757575] hover:text-black'>Promotions</a>
                            <img className='absolute top-[-15px] right-[-10px]' src={NavbarIcon} width={36} height={19}/>
                        </li>
                        <li>
                            <a href={"#"} className='text-[14px] font-medium leading-6 text-[#757575] hover:text-black'>Blogs</a>
                        </li>
                        <li>
                            <a href={"#"} className='text-[14px] font-medium leading-6 text-[#757575] hover:text-black'>Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <strong className='text-[14px] font-medium mr-[10px] leading-6'>Masuk</strong>
                    <Button title={"Daftar Sekarang"} width={147} fontSize={14}/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header