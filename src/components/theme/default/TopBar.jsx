import React from 'react'
import { IconOutlineMail1 } from "./icons/IconOutlineMail1";
import { IconOutlinePhone1 } from "./icons/IconOutlinePhone1";

import useGeneralContext from "../../../context/GeneralContext";


const Languages = [
    { id: 'rtl', name: 'fa' },
    { id: 'ltr', name: 'en' },
  ];

function TopBar() {

    const {
        setLng,
        setCurrentLng,
        currentLng,
    } = useGeneralContext();


    const handleChange = (e) => {

        setLng(Languages[e.target.value])
        // setLng(Languages[1])
    }

    return (
        <div className="w-screen px-[37px] py-[5px] top-0 bg-[#4c4c4c]">

            <div class="flex flex-wrap justify-center">

                <div className="basis-1/4 inline-flex items-center justify-center">
                    <IconOutlinePhone1 className="" />
                    <div className="text-white text-[16px] px-2">
                        <a href="tel:+37498228414">+37498228414</a>
                    </div>
                </div>
                <div className="basis-1/4 inline-flex items-center justify-center">
                    <IconOutlineMail1 className="" />
                    <div className="text-white text-[16px] px-2">
                        yummy.food@gmail.com
                    </div>
                </div>
                <div className=" basis-1/4 items-center justify-center flex">
                    <a href="https://twitter.com/" target="_blank">
                        <div className="relative text-white w-[27.17px] h-[27.17px] px- bg-[#f8f8f61f] rounded-[13.59px] mx-1 hover:bg-[#ae353f]">
                            <img
                                className="absolute w-[15px] h-[15px] top-[6px] left-[7px]"
                                alt="Logo twitter"
                                src="https://c.animaapp.com/nDFk6xrj/img/logo-twitter-2-1@2x.png"
                            />
                        </div>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <div className=" relative text-white w-[27.17px] h-[27.17px] px-2 bg-[#f8f8f61f] rounded-[13.59px] mx-1 hover:bg-[#ae353f]">

                            <img
                                className="absolute w-[10px] h-[15px] top-[6px] left-[9px]"
                                alt="Logo fb simple"
                                src="https://c.animaapp.com/nDFk6xrj/img/logo-fb-simple-2-1@2x.png"
                            />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <div className=" relative text-white w-[27.17px] h-[27.17px] px-2 bg-[#f8f8f61f] rounded-[13.59px] mx-1 hover:bg-[#ae353f]">
                            <img
                                className="absolute w-[16px] h-[15px] top-[6px] left-[5px]"
                                alt="Logo instagram"
                                src="https://c.animaapp.com/nDFk6xrj/img/logo-instagram-1-1@2x.png"
                            />
                        </div>
                    </a>
                    <a href="https://github.com/" target="_blank">
                        <div className=" relative text-white w-[27.17px] h-[27.17px] px-2 bg-[#f8f8f61f] rounded-[13.59px] mx-1 hover:bg-[#ae353f]">
                            <img
                                className="absolute w-[15px] h-[15px] top-[6px] left-[5px]"
                                alt="Logo github"
                                src="https://c.animaapp.com/nDFk6xrj/img/logo-github-1-1@2x.png"
                            />
                        </div>
                    </a>

                    <select

                        id="language"
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-1 focus:outline-none focus:border-[#ae353f]"
                    >
                        <option value="">{currentLng.name}</option>
                        {Languages.map((language, languageIdx) => (

                            <option key={languageIdx} value={languageIdx}>
                                {language.name}
                            </option>

                        ))}
                    </select>
                </div>

            </div >


        </div >
    )
}

export default TopBar