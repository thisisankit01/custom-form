import React from 'react'

interface StringInputProps {
    placeholder: string;
}

const StringInput = ({placeholder} : StringInputProps) => {
  return (
    <input type="text" className='border-[#d9e7f8] border-2 rounded-md bg-[#f0f7ff] focus:outline-none font-semibold text-slate-400 w-1/2 py-2 px-4 placeholder:text-[#7c96be] ' placeholder={placeholder}/>
  )
}

export default StringInput