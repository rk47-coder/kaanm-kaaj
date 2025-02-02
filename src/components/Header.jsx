//import React from "react";

function Header(){
    return(
        <div className="bg-[#2699fb] p-4">
            <div className="max-w-[1240px] mt-[20px] items-center border border-black mx-auto flex justify-between">
                 <div className="text-3xl font-bold">
                    KAAM KAAJ
                </div>   
                <ul className="flex text-white gap-10">
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