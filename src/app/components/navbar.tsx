'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import Button from './button'
import NavLink from './nav-link'
import Logo from '/public/Logo.png'
export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50  p-5 md:w-auto w-full flex flex-row justify-between">
          <Image
            src={Logo}
            alt=""
            className="md:cursor-pointer w-auto h-9 bg-no-repeat"
          />
          <div
            onClick={() => setOpenSidebar(!openSidebar)}
            className="md:hidden"
          >
            {openSidebar ? <IoClose size={30} /> : <IoMenu size={30} />}
          </div>
        </div>
        <ul className=" uppercase hidden md:flex items-center gap-8 font-sans">
          <li>
            <Link href="#" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLink />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile Nav */}

        <ul
          className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${openSidebar ? 'left-0' : 'left-[-100%]'}`}
        >
          <li>
            <Link href="#" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLink />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  )
}
