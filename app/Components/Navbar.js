import React from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
  return (
    <div>
      <nav className="p-4 bg-background/50  h-20 text-white    fixed right-0 left-0  top-0  backdrop-blur items-center justify-center">
  <div className="container mx-auto flex justify-between border-b pb-6 items-center">
    <Link href="/">
      <div className="text-lg font-bold flex  items-center">
        GPCELearn!
      </div>
    </Link>
    <div className="hidden md:flex space-x-4 items-center">
      <Link className='hover:text-gray-500' href="/">Home</Link>
      <Link className='hover:text-gray-500' href="/about">About</Link>
      <Link className='hover:text-gray-500' href="/contact">Contact</Link>
      <div>
   <a href='/login'>  <button className="text-white mx-1  bg-green-600 rounded-xl  bg-linear-to-r from-cyan-500 to-blue-500   hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 px-2 py-1 ">Login</button></a> 
   <a href='/signup'>  <button className="text-white mx-1 bg-green-600 rounded-xl  bg-linear-to-r from-cyan-500 to-blue-500  hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 px-2 py-1">Sign-up</button></a>
      </div>
    </div>
    <div className="md:hidden">
    <Sheet>
  <SheetTrigger >
    <button className="text-white   focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      </SheetTrigger>
  <SheetContent className=" bg-gray-700 text-white delay-1000">
    <SheetHeader>
    <div className="space-x-4 items-center text-white flex flex-col ">
      <Link className='hover:text-gray-400  border-2 border-black space-y-4  my-1 text-center  bg-black py-1 px-30 rounded-xl  ' href="/">Home</Link>
      <Link className='hover:text-gray-400  border-2 border-black space-y-4  my-1 text-center  bg-black py-1 px-30 rounded-xl  ' href="/about">About</Link>
      <Link className='hover:text-gray-400  border-2 border-black space-y-4  my-1 text-center  bg-black py-1 px-30 rounded-xl  ' href="/contact">Contact</Link>
      <Link className='hover:text-gray-400  border-2 border-black space-y-4  my-1 text-center  bg-black py-1 px-30 rounded-xl  ' href="/login">Login</Link>
      <Link className='hover:text-gray-400  border-2 border-black space-y-4  my-1 text-center  bg-black py-1 px-30 rounded-xl  ' href="/signip">SignUp</Link>

    </div>
    </SheetHeader>
  </SheetContent>
</Sheet>
<Sheet>
  <SheetTrigger></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
