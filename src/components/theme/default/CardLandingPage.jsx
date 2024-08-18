import React from 'react'

import { MdOutlineFreeBreakfast } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import { BiSolidDrink } from "react-icons/bi";
import { TbBrandCakephp } from "react-icons/tb";

import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

function CardLandingPage() {
    return (
        <>
            <div className='bg-[#f1f1f1]'>

                <div className=''>
                    <Typography
                        variant="h3"
                        color="black"
                        className="text-center m-10 mt-12 text-3xl md:text-4xl lg:text-5xl"
                    >
                        Browse Our Menu
                    </Typography>
                </div>

                <div className='flex flex-wrap justify-center px-[4rem] py-[2rem] pt-[0.1rem]'>

                    <Card className="sm:basis-1 m-4  h-full">
                        <CardBody>
                            <div className='mx-[8rem]'>
                                <MdOutlineFreeBreakfast className=' text-5xl bg-[#f1f1f1] rounded-lg' />
                            </div>

                            <div className='mt-7 text-center'>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Breakfast
                                </Typography>
                            </div>
                            <div className='mt-5 text-center'>
                                <Typography>
                                    I enjoyed a hearty breakfast of
                                    scrambled  eggs and toast
                                    to start my day.
                                    I enjoyed a hearty breakfast of
                                    scrambled  eggs and toast
                                    to start my day.
                                    I enjoyed a hearty breakfast of
                                    scrambled  eggs and toast
                                    to start my day.
                                </Typography>
                            </div>
                        </CardBody>
                        <CardFooter className="">
                            <a href="#" className="inline-block ">
                                <Button size="sm" variant="text" className="flex items-center gap-2 bottom-0 text-[#ae353f]">
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-4 w-4 "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                    <Card className="sm:basis-1 m-4  h-full">
                        <CardBody>
                            <div className='mx-[8rem]'>
                                <BiDish className=' text-5xl bg-[#f1f1f1] rounded-lg' />
                            </div>

                            <div className='mt-7 text-center'>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                Main Dishes
                                </Typography>
                            </div>
                            <div className='mt-5 text-center'>
                                <Typography>
                                    I enjoyed a hearty breakfast of
                                    scrambled  eggs and toast
                                    to start my day.
                                    I enjoyed a hearty breakfast of
                                    scrambled  eggs and toast
                                    to start my day.
                                    I enjoyed a hearty breakfast of
                                    scrambled  eggs and toast
                                    to start my day.
                                </Typography>
                            </div>
                        </CardBody>
                        <CardFooter className="">
                            <a href="#" className="inline-block ">
                                <Button size="sm" variant="text" className="flex items-center gap-2 bottom-0 text-[#ae353f]">
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-4 w-4 "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                    <Card className="sm:basis-1 m-4  h-full">
                        <CardBody>
                            <div className='mx-[8rem]'>
                                <BiSolidDrink className=' text-5xl bg-[#f1f1f1] rounded-lg' />
                            </div>

                            <div className='mt-7 text-center'>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Drinks
                                </Typography>
                            </div>
                            <div className='mt-5 text-center'>
                                <Typography>
                                    I enjoyed a hearty breakfast of
                                    scrambled  eggs and toast
                                    to start my day.
                                    I enjoyed a hearty breakfast of
                                    scrambled  eggs and toast
                                    to start my day.
                                    I enjoyed a hearty breakfast of
                                    scrambled  eggs and toast
                                    to start my day.
                                </Typography>
                            </div>
                        </CardBody>
                        <CardFooter className="">
                            <a href="#" className="inline-block ">
                                <Button size="sm" variant="text" className="flex items-center gap-2 bottom-0 text-[#ae353f]">
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-4 w-4 "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                    <Card className="sm:basis-1 m-4  h-full">
                        <CardBody>
                            <div className='mx-[8rem]'>
                                <TbBrandCakephp className=' text-5xl bg-[#f1f1f1] rounded-lg' />
                            </div>

                            <div className='mt-7 text-center'>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Desserts
                                </Typography>
                            </div>
                            <div className='mt-5 text-center'>
                                <Typography>
                                    I enjoyed a hearty breakfast of
                                    scrambled  eggs and toast
                                    to start my day.
                                    I enjoyed a hearty breakfast of
                                    scrambled  eggs and toast
                                    to start my day.
                                    I enjoyed a hearty breakfast of
                                    scrambled  eggs and toast
                                    to start my day.
                                </Typography>
                            </div>
                        </CardBody>
                        <CardFooter className="">
                            <a href="#" className="inline-block ">
                                <Button size="sm" variant="text" className="flex items-center gap-2 bottom-0 text-[#ae353f]">
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-4 w-4 "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                  
                  
                   

                </div>
            </div >


        </>
    );
}

export default CardLandingPage