// import React from 'react'

const NewsLetter = () => {
  return (
    <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
            <div className="m-2">
                <h1 className="text-[20px] md:text-[40px] font-bold text-white">
                    want to apply web developer
                </h1>
                <span className="text-white">
                    sign up to our newslatter and stay up to date
                </span>
            </div>
            <div className="m-2">
                <input type="text" placeholder="email" className="sm:w-full text-slate-600 bg-white rounded mb-2 p-3 mr-2" ></input>
                <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button><br/>
                <p className="text-white">
                    we are care about your data
                    <br/> <a href="" className="text-black">privacy policy</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter