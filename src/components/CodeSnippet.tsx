"use client"

import React , {useState} from 'react'

const CodeSnippet = () => {
    const [code, setCode] = useState('');

    const handleChange = (event : any) => {
      setCode(event.target.value);
    };
  
    const generateLineNumbers = () => {
      const lines = code.split('\n')
      return lines.map((line, index) => (
        <div key={index}>
          {index + 1}
        </div>
      ))
    }

  return (
    <div className='py-8'>
    <div className="flex border rounded-2xl snippet-scroll">
      <div className="font-normal text-slate-400 text-sm px-2 font-mono">{generateLineNumbers()}</div>
      <textarea
        value={code}
        className="bg-slate-800 text-slate-100 flex-1 font-mono text-sm px-2 py-1 resize-none border rounded-r-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        onChange={handleChange}
        placeholder="Type your code here..."
      />
    </div>
    </div>
  )
}

export default CodeSnippet