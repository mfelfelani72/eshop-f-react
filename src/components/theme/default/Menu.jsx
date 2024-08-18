import React from 'react'

import { OriginalLogo } from "./OriginalLogo";

import { useTranslation } from "react-i18next";

function Menu() {

    const { t } = useTranslation();
    
    return (
        <div className="w-screen px-[50px] py-[17px] left-0 bg-[#f1f1f1]">

            <div className="flex flex-wrap justify-center lg:justify-start">

                {/* logo */}
                <div className="hidden basis-1/2 lg:flex items-center w-[400px] justify-start px-[100px]">
                    <img
                        className="w-[56px] h-[30px]"
                        alt="Japanese food"
                        src="https://c.animaapp.com/nDFk6xrj/img/japanese-food-1.svg"
                    />
                    <OriginalLogo
                        className="!ml-[-25px] !h-[30px] !w-[182.67px]"
                        divClassName="!text-[#474747] !tracking-[-0.40px] !text-[30px] !left-[15px] !leading-[29.3px] !top-[3px]"
                        hasHotFood={false}
                        text="Yummy Food"
                        type="main"
                    />
                </div>

                {/* menu */}
                <div className="basis-1/2 justify-center inline-flex items-center">
                    <div className="px-2 h-[30px] w-[60px] bg-[#dbdfd0] rounded-[34px]">
                        <div className="mt-[2px]">

                            {t('home')}

                        </div>
                    </div>
                    <div className="px-2  h-[30px] w-[60px]">
                        <div className="mt-[2px] text-center">
                            {t('menu')}
                        </div>
                    </div>
                    <div className="px-2  h-[30px] w-[60px]">
                        <div className="mt-[2px] text-center">
                            Blog
                        </div>
                    </div>
                    <div className="px-2  h-[30px] w-[60px]">
                        <div className="mt-[2px] text-center">
                            About
                        </div>
                    </div>
                    <div className="px-2  h-[30px] w-[60px]">
                        <div className="mt-[2px] text-center">
                            Contact
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Menu