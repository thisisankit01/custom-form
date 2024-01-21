import React from 'react';

interface ContainerProps {
    children: React.PropsWithChildren<any>
}

const OuterContainer = ({children} : ContainerProps) => {
  return (
    <div className='py-4 px-3'>
    <div className='bg-[#fafcfe] border-[#f5f9fe] border-2'>
        {children}
    </div>
    </div>
  )
}

const InnerContainer = ({children} : ContainerProps) => {
    return (
      <div className='px-4'>
      {children}
      </div>
    )
}

export {OuterContainer , InnerContainer}