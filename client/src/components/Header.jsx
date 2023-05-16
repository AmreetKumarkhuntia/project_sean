import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center bg-transparent sm:px-8 py-6'>
        <h1 className="font-semibold text-4xl ml-2"><a href="/">Project Sean</a></h1>
        <a href="/about" className="font-semibold max-sm:mx-9 text-white">About</a>
    </header>
  )
}

export default Header