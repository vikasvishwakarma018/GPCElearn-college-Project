import React from 'react'

const page = () => {

  return (
    <div className=' bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] '>

    <div className='py-30 '>
    
    <div className="page min-h-[100vh] py-4  text-center  space-y-5 text-white w-full items-cente ">
       <h1 className='text-5xl font-bold '>SEMESTER</h1>  
       <p className='text-gray-300 font-semibold text-xl'>Select your semester and get to notes </p>
  
  <div className="flex flex-col gap-5 ">


    <div className=" flex-col mx-auto space-x-7 container items-center justify-center text-center">
   <a href="https://deepakprakashan.in/DiplomaBooks.aspx?CId=20&MId=2&MName=HINDI"> <button className="text-white bg-green-600 rounded-xl  bg-linear-to-r from-cyan-500 to-blue-500  hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 px-2 py-2 ">1 SEMESTER</button> </a>
   <a href="https://deepakprakashan.in/DiplomaBooks.aspx?CId=20&MId=2&MName=HINDI"> <button className="text-white bg-green-600 rounded-xl  bg-linear-to-r from-cyan-500 to-blue-500  hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 px-2 py-2 ">2 SEMESTER</button> </a>
    </div>
     
    <div className=" flex-col mx-auto space-x-7 container items-center justify-center text-center">
   <a href="cs/cs3"> <button className="text-white bg-green-600 rounded-xl  bg-linear-to-r from-cyan-500 to-blue-500  hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 px-2 py-2 ">3 SEMESTER</button> </a>
   <a href="/cs/cs4"> <button className="text-white bg-green-600 rounded-xl  bg-linear-to-r from-cyan-500 to-blue-500  hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 px-2 py-2 ">4 SEMESTER</button> </a>
    </div>
     
    <div className=" flex-col mx-auto space-x-7 container items-center justify-center text-center">
   <a href=""> <button className="text-white bg-green-600 rounded-xl  bg-linear-to-r from-cyan-500 to-blue-500  hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 px-2 py-2 ">5 SEMESTER</button> </a>
   <a href=""><button className="text-white bg-green-600 rounded-xl  bg-linear-to-r from-cyan-500 to-blue-500  hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 px-2 py-2 ">6 SEMESTER</button> </a>
    </div>
   <a href="https://www.polygwalior.ac.in/diploma_papers.php"><button className="text-white bg-green-600 rounded-xl  bg-linear-to-r from-cyan-500 to-blue-500  hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 px-2 py-2 ">PYQ PAPERS</button></a>
   
    
    
    </div>
    </div>
    </div>
        </div>
       
   
  )
}

export default page
