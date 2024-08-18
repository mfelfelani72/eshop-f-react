import React from 'react'
import { IconOutlineMail1 } from "./icons/IconOutlineMail1";
import { IconOutlinePhone1 } from "./icons/IconOutlinePhone1";
import { SlLocationPin } from "react-icons/sl";

const BanerLandingPage = () => {

    return (

        <div className='flex flex-wrap justify-center bg-[#f8f8f8] w-screen h-full pb-10'>
            <div className='relative basis-1  px-[12.5rem] md:px-[15rem] lg:px-[20rem] px-f h-[35rem]'>
                <div className='absolute left-0 bottom-0 top-0 m-10'>
                    <img
                        src="https://www.mastersgalleryfoods.com/wp-content/uploads/2023/04/Prep_660x443.jpg"
                        alt="image 1"
                        className="h-full w-full object-cover rounded-xl"
                    />

                </div>
                <div className='absolute right-0 bottom-0 bg-[#4c4c4c] rounded-lg text-white'>
                    <div className='flex flex-col ml-1 px-6 py-6 '>
                        <div className='font-bold'>Come and visit us</div>
                        <div className='pt-6 inline-flex'><IconOutlinePhone1 className="mx-1" />+37498228414 </div>
                        <div className='pt-4 inline-flex'><IconOutlineMail1 className="mx-1" /> yummy.food@gmail.com </div>
                        <div className='pt-4 inline-flex'> <SlLocationPin className='mx-1' />yerevan - keivian 15 - nikol duman 10 </div>
                    </div>
                </div>
            </div>

            <div className='relative basis-1  px-[12rem] md:px-[15rem] lg:px-[20rem] px-f h-[35rem]'>
                <div className='absolute left-0'>
                    <div className='flex flex-col'>
                        <div>
                            <h3 className='text-center mt-9 text-3xl md:text-4xl font-bold'>
                                We provide healthy food for
                                your family.
                            </h3>
                        </div>
                        <div className='mt-5'>
                            <h6 className='text-blue-950 m-4'>
                                Our story began with a vision to create a unique dining experience
                                that merges fine dining, exceptional service, and a vibrant ambiance.
                                Rooted in city's rich culinary culture, we aim to honor our local roots
                                while infusing a global palate.
                            </h6>
                        </div>
                        <div className='mt-5'>
                            <h6 className='text-blue-950 mx-4 mt-0'>
                                At place, we believe that dining is not just about food, but also
                                about the overall experience. Our staff, renowned for their warmth and
                                dedication, strives to make every visit an unforgettable event.
                                At place, we believe that dining is not just about food, but also
                                about the overall experience. Our staff, renowned for their warmth and
                                dedication, strives to make every visit an unforgettable event.
                            </h6>
                        </div>
                        <button class="hover:text-rose-50 hover:bg-rose-900 font-bold mt-4 py-2 px-4 rounded flex items-start gap-2 bottom-0 text-[#ae353f] mx-auto">
                            Learn More
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BanerLandingPage