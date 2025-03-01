import React from 'react'

const Button = ({label, iconUrl, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : ' bg-coral-red text-white border-coral-red' } rounded-full ${fullWidth && 'w-full'} '}`}>
        {label}
        {iconUrl && <img src={iconUrl} className='ml-2 rounded-full w-5 h-5' alt="arrow right icon" />}
    </button>
  )
}

export default Button