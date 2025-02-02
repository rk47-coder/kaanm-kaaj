//import React from 'react' 


import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[100px]">
        <div className="max-w-[1240px] mx-auto text-center font-bold my-[100px]">
            <div className="text-xl md:text-3xl md:p-[24px] ">
                Latest Vacancy
            </div>
            <h2 className="text-white text-3xl  md:text-[60px] md:p-[24px]">
                Grow with us .
            </h2>
            <div className="text-[20px] md:text-[50px] text-white md:p-[24px]"> 
                Apply
                <ReactTyped className="pl-3"
                strings ={['Web Developer','Software Developer']}
                typeSpeed={100}
                loop={true}
                backSpeed={110}
                />
            </div>
            <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
    </div>
  )
}

export default Banner