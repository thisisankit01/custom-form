import React from 'react'

interface CheckboxProps {
    text: string;
}

const Checkbox = ({text} : CheckboxProps) => {
  return (
    <div className='flex items-left w-1/2'>
    <input type="checkbox" className='w-4 h-4 rounded-md checked:bg-black checked:before:bg-black checked:text-white'/>
    {text}
    </div>
  )
}

export default Checkbox