"use client"
import React from 'react'
import "@/styles/globals.css"

const RooyLayout = (   {children}    ) => {
  return (
    <html lang='en'>

        <body>

            <div>
                {children}    
            </div>    

        </body>

    </html>
  )
}

export default RooyLayout