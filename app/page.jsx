"use client"

import Editor from '@/components/Editor'
import useLocalStorage from '@/hooks/useLocalStorage'
import React, { useEffect, useState } from 'react'

const page = () => {


  const [html, sethtml] = useLocalStorage('html', '')
  const [css, setcss] = useLocalStorage('css', '')
  const [js, setjs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(  `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script/>
      </html>
    `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
  

  return (
    <div className='py-12 flex flex-col gap-10 '>
        <h1 className='text-center text-[44px] uppercase font-black'>Code Editor</h1>
        <div className='flex sm:gap-24 gap-12 justify-center items-center sm:flex-row flex-col'>
            <Editor language="xml" displayName="HTML" value={html} onChange={sethtml}/>
            <Editor language="css" displayName="CSS" value={css} onChange={setcss}/>
            <Editor language="javascript" displayName="JS" value={js} onChange={setjs}/>
        </div>
        <div>
            <iframe srcDoc={srcDoc} title='output' sandbox='allow-scripts' frameBorder="0" width="100%" height="100%" className='h-screen'/>
        </div>
    </div>
  )
}

export default page