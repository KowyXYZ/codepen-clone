"use client"

import React, { useState }  from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

const Editor = ({displayName, language, value, onChange}) => {

  const handleChange = (editor, data, value) => {
    onChange(value)
  }

  const [open, setOpen] = useState(true)


  return (
    <div className={`flex flex-col w-[90%] sm:w-1/4 ${open ? '' : 'sm:w-[200px] h-[150px]'}`}>
      <div className='bg-[#e3e3e3] rounded-t-2xl  text-[#121212] p-2 flex justify-between items-center'>
          <h1 className='text-[20px] uppercase font-black'>{displayName}</h1>
         <button className='' onClick={() => setOpen(prevOpen => !prevOpen)}>O/C</button></div>
      <ControlledEditor onBeforeChange={handleChange} value={value} className='rounded-b-2xl flex-grow overflow-hidden h-80' options={{
        lineWrapping: true,
        lint: true,
        mode: language,
        theme: 'material',
        lineNumbers: true
      }}/>
    </div>
  )
}

export default Editor