import React from 'react';

function Button({ title, width, fontSize, additionalClass }) {
  return (
    <button className={`custom-button hover:opacity-80 rounded-[100px] inline-block py-[12px] bg-[#8BAC3E] font-medium leading-6 text-white ${additionalClass}`} style={{ width: `${width}px`, fontSize: `${fontSize}px` }}>{title}</button>
  );
}

export default Button;
