//import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function Header(){
    return(
        <div className="bg-[#2699fb] p-4">
            <div className="max-w-[1240px] py-[15px] items-center  mx-auto flex justify-between">
                 <div className="text-3xl font-bold">
                    KAAM KAAJ
                </div>  
                <AiOutlineMenu className="text-white text-2xl md:hidden block"/> 
                {/* <AiOutlineClose className="text-white text-2xl md:hidden block"/> */}
                <ul className=" hidden md:flex text-white gap-10">
                    <li>
                        Home 
                    </li>
                    <li>
                        Company
                    </li>  
                    <li>
                        Resources
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>   

                <ul className="md:hidden text-white fixed bg-black left-0 top-[98px]">
                    <li>
                        Home 
                    </li>
                    <li>
                        Company
                    </li>  
                    <li>
                        Resources
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>   
            </div>

        </div>
    )
}
export default Header; 