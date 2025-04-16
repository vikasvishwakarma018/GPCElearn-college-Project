"use client"
import React from 'react'
import { useRef } from 'react';

const page = () => {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      
    };
  
  return (
    <div className='py-30 '>
<div className="page min-h-[100vh] py-10 text-center space-y-10 w-full flex flex-col items-center justify-center">
    <h1 className="text-4xl md:text-6xl font-bold text-gray-300 flex items-center justify-center">
        GPCElearn 
        <span className="flex items-center justify-center ml-2">
            <img className="w-20 md:w-24" src="https://media4.giphy.com/media/324sEkye9F1NMIvogH/giphy.gif?cid=6c09b952l8u8coeiha4h3wxehmx7ico68m1sf0brlwll0gb2&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="study" />
        </span>
    </h1>
    <p className="text-gray-300 text-lg font-semibold">
        This website is an educational platform dedicated to helping diploma students learn, grow, and succeed.
    </p>
    <div className="btns flex flex-col md:flex-row text-lg space-x-0 md:space-x-4 items-center justify-center p-4 m-3 py-2 my-6">
       <a href="/corces"><button onClick={scrollToSection} className="text-white bg-green-600 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 px-4 py-2">
            Start Here
        </button>
        </a> 
      <a href="https://gpch.in/">  <button className="text-white bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 rounded-xl px-4 py-2 mt-2 md:mt-0">
           Visit Site
        </button>
        </a>
    </div>
</div>



<section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">🔥 "Great things never come from comfort zones." <br/>
💪 "We are not just diploma students, we are future creators."</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section>




     <hr className="bg-white h-1.5 opacity-10 w-full mt-10 " />
<div className="page1 min-h-[80vh] w-full text-white flex flex-col items-center justify-center">
    <h1 className="text-2xl font-bold mt-2 md:py-4   text-center">Learnings</h1>

    <div className="elements  my-2 h-auto md:gap-20  flex flex-col md:flex-row justify-around space-x-0 md:space-x-4  text-white items-center">
        <div className="box flex flex-col items-center justify-center text-center">
            <img className="h-22 rounded-full" src="./links1.gif" alt="links1" />
            <h1 className="font-bold mt-2">Learn Coding</h1>
            <p className="my-2">They are learning coding</p>
        </div>
        <div className="box flex flex-col items-center justify-center text-center">
            <img className="h-22 rounded-full" src="./links2.gif" alt="links2" />
            <h1 className="font-bold mt-2">Study Material</h1>
            <p className="my-2">Learning e-book for this site</p>
        </div>
        <div className="box flex flex-col items-center justify-center text-center">
            <img className="h-22 rounded-full" src="http://localhost:3000/links3.gif" alt="links3" />
            <h1 className="font-bold mt-2">Growth Future</h1>
            <p className="my-2">Keep learning, keep growing</p>
        </div>
    </div>
    <hr className="bg-white h-1.5 opacity-10 w-full mt-4" />
</div>

<div className="page-2 container card text-white  mx-auto  ">
  <div className="cardcontainer gap-10 ">
<h1 className='text-center text-3xl py-3 font-bold '> Cources </h1>
<p className='text-center font-semibold text-gray-400 mb-7 '> Please Seleact Your cource</p>
<div className="btns items-center text-center py-3 ">
  
  <div className="btn  flex-col space-x-3 gap-3 container">
  <a href = "/diploma">
   <button type="button"  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Diploma  </button> </a>

<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Btech</button>


  </div>

  <div className="btn  flex-col space-x-3 gap-3 ">
<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">D PHARMACY </button>


<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> B PHARMACY </button>

</div>
<div className="btn  flex-col ">

  
<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">MCA </button>

<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">MTECH</button>
</div>
<div className="btn  flex-col ">
<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">M ARCH </button>


<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">M PHARMACY </button>
</div>

<div className="btn  flex-col ">
<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">MAM </button>



</div>

</div>

</div>
<hr class="bg-white h-1.5 opacity-10  w-full my-4 "/>



{/* cards */}

<div className="flex container flex-col  gap-8  items-center justify-center min-h-[80vh] w-full text-center">
<a href="/cs" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Branch - Computer Science Engineer</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
<a href="/mech" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.unsplash.com/photo-1640556795357-71d4078d6228?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVjaG5pY2FsJTIwZW5naW5lcnxlbnwwfHwwfHx8MA%3D%3D" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Branch- Mechnical Engineer</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
<a href="/civil" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://plus.unsplash.com/premium_photo-1681823749585-7dedb5a91dc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2l2aWx8ZW58MHx8MHx8fDA%3D" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Branch - Civil Engineer</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">"We design the dreams you walk on,
building the future from the ground up."</p>
    </div>
</a>
<a href="/Et" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://plus.unsplash.com/premium_photo-1664298006973-e98eb94d006c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWxlY3RyaWN8ZW58MHx8MHx8fDA%3D" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Branch - Electric Engineer</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">"Wired for innovation, grounded in logic —
        we light up the future, one circuit at a time."</p>
    </div>
</a>
</div>
</div> 

</div>
  )
}

export default page
