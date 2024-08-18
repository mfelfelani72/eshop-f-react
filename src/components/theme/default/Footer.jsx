import React from 'react'
import { OriginalLogo } from "./OriginalLogo";

function Footer() {
  return (
    <>
      <div className="w-screen h-full bg-[#1b1b10]">
        <div className='m-5 flex flex-wrap justify-start'>
          <div className='ex-sm-footer sm:basis-1/2 lg:basis-1/3 h-[25rem]'>
            <div className="flex ">
              <img
                className="w-[56px] h-[30px] left-0"
                alt="Japanese food"
                src="https://c.animaapp.com/nDFk6xrj/img/japanese-food-1.svg"
              />
              <OriginalLogo
                className="!ml-[-25px] !h-[30px] !w-[182.67px]"
                divClassName="!text-[#ebebeb] !tracking-[-0.40px] !text-[30px] !left-[15px] !leading-[29.3px] !top-[3px]"
                hasHotFood={false}
                text="Yummy Food"
                type="main"

              />
              
            </div>
            <div className='m-5  '>sadsadsa </div>
            <div className='m-5  '>sadsadsa </div>
            <div className='m-5  '>sadsadsa </div>
            <div className='m-5  '>sadsadsa </div>
            <div className='m-5  '>sadsadsa </div>
          </div>
          <div className='ex-sm-footer sm:basis-1/2 lg:basis-1/3 bg-orange-500 h-[25rem]'>mohammad</div>
          <div className='ex-sm-hidden sm:hidden lg:block lg:basis-1/3 bg-red-500 h-[25rem]'>hadi</div>
        </div>
      </div>
    </>
  )
}

export default Footer