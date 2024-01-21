"use client"

import React from 'react'

interface SelectProps {
    text: string;
    mandatory?: boolean;
}

const Select = ({text , mandatory} : SelectProps) => {
    const [selected , setSelected] = React.useState(false)
  return (
    <div className={`w-1/2 border-[#d9e7f8] border-2 rounded-md bg-[#f0f7ff] font-semibold py-2 px-4 text-center text-semibold hover:cursor-pointer text-black ${selected ? `bg-[#e1edfd] border-[#b2afe8]` : ``}`} onClick={() => setSelected((prev)=> !prev)}>{text} 
    {mandatory && <span className='text-red-500 text-sm px-[2px]'>*</span>}
    </div>
  )
}

export default Select