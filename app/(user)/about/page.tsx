import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: "Hello CSTAD ",
	description: "CSTAD are providing the best service for you!",
}

export default function page() {
  return (
    <div className='h-screen grid place-content-center text-6xl'>About Page</div>
  )
}
