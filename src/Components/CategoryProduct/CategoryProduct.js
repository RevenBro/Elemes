import React from 'react'


function CategoryProduct({ImgSrc, title, number, width, height, bgColor, ImgBgSrc}) {
  return (
    <ul style={{ backgroundColor: bgColor }} className='rounded-[8px] flex items-start'>
        <li className='category-item flex flex-col items-center justify-between w-[230px] hover:animate-pulse hover:py-[35px] py-[20px] px-[81px]'>
            <img className='mb-[15px]' src={ImgSrc} width={[`${width}px`]}px height={[`${height}px`]}/>
            <strong className='mb-[4px]'>{title}</strong>
            <span>{number}items</span>
        </li>
    </ul>
  )
}

export default CategoryProduct