import React from 'react'

interface HeaderProps {
    HeadingName: string;
    formHeading?: boolean;
    mandatory?: boolean;
}

const Header = ({HeadingName , formHeading, mandatory} : HeaderProps) => {

  return (
    <>
            <div className='py-3 px-3'>
            <div className={`text-left font-semibold px-4 flex flex-row justify-start ${formHeading ? `text-xl` : `text-lg`}`}>
                    {HeadingName}
                    {mandatory && <span className='text-red-500 text-sm px-[2px]'>*</span>}
                 </div>
            <p className='border-[1px] rounded-2xl border-[#f1f1f1] my-2'/>
            </div>
    </>
  )
}

export default Header