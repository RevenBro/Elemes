import React from 'react'

import StarIcon from '../../Assets/Images/starIcon.svg'

function ResepsCard({ImgSrc, bgColor, nameFood, nameFood2}) {
  return (
    <div>
        <ul style={{backgroundColor: bgColor}} className='reseps-item w-[275px] rounded-[17px] shadow-md backdrop-blur-md pt-[26px] pl-[26px] pb-[33px]'>
            <li>
                <img className='mb-[10px]' src={ImgSrc} width={118} height={120} alt={"Reseps"}/>
            </li>
            <li>
                <h3 className='text-[26px] mb-[5px] font-medium leading-10'>{nameFood}</h3>
            </li>
            <li>
                <strong className='text-[#9CB960] text-[18px] font-medium leading-5'>{nameFood2}</strong>
            </li>
            <img className=' mt-[19px]' src={StarIcon} width={68} height={10} alt={"Star"}/>
        </ul>
    </div>
  )
}

export default ResepsCard