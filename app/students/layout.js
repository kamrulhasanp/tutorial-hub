'use client'

import '../globals.css'
import NavBar from '@/components/Nav/NavBar'

import React from 'react'

export default function MainBodyLayout({children}) {
  return (
    <div className='h-screen overflow-auto'>
        <div className="">
            <NavBar />
        </div>
      
    </div>
  )
}
