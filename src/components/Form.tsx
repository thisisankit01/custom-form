import React from 'react'
import {OuterContainer , InnerContainer} from './Container'
import Header from './FormHeader'
import StringInput from './StringInput'
import Select from './Select'
import DropDown from './DropDown'
import Checkbox from './Checkbox'

const Form = () => {
    const dropDownData = ['Veg' , 'Non-Veg']
  return (
    <div className='py-8 '>
        <div className='border border-gray-400 h-screen rounded-2xl'>
                 <Header HeadingName={"New Pizza"} formHeading/>
                 <OuterContainer>
                    <Header HeadingName='Pizza Name' mandatory/>
                    <InnerContainer>
                    <StringInput placeholder='Enter Pizza Name'/>
                    <Select text='Select Pizza Type' mandatory/>
                    <DropDown dropDownData={dropDownData}/>
                    <Checkbox text='Hello there'/>
                    </InnerContainer>
                 </OuterContainer>
        </div>
    </div>
  )
}

export default Form