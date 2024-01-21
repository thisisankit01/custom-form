import React from 'react'
import { useId } from 'react';

interface DropDownProps {
    dropDownData: string[];
}

const DropDown = ({dropDownData} : DropDownProps) => {
    const id = useId();
  return (
     <select className='border-[#d9e7f8] border-2 rounded-md bg-[#f0f7ff] focus:outline-none font-semibold text-slate-400 w-1/2 py-2 px-4'>
            {dropDownData.map((data) => {
                return <option className='font-semibold text-slate-400 py-4' value={data} key={id}>{data}</option>
            })}
     </select>
  )
}

export default DropDown