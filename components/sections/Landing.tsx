


import Button from "@/components/ui/Button";
import Image from "next/image";
import heroImage from '../../public/assets/heroimage.png'
import net from '../../public/assets/net.png'
import red from '../../public/assets/red.png'
import amazon from '../../public/assets/amazon.png'
import discord from '../../public/assets/discord.png'
import spotify from '../../public/assets/spotify.png'
import whatwedo from '../../public/assets/whatwedo.png'
import post3 from '../../public/assets/post3.webp'
import Navbar from "../layouts/Navbar";
import { useState } from "react";
import PageWrapper from "../wrappers/PageWrapper";
import Footer from "../layouts/Footer";
import Hero from "./Hero";
import Stats from "./Stats";

const Landing = () => {
    return (
        <>

           <PageWrapper>
                <Navbar  />
                <Hero />
                <Stats />
               

                




                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-20 xl:px-400">
                    <div className="flex justify-center">
                        <Image className="w-3/5" src={whatwedo} alt="what we do image" width={100} height={100} />
                    </div>
                    <div >
                        <div className="xl:w-3/5 flex flex-col gap-5">
                            <h1 className="leading-[50px] text-[35px] font-bold text-primary-blue">We Provide Many Features You Can Use</h1>
                            <p className="text-primary-gray text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.1215 0.549316C4.60746 0.549316 0.12146 5.03532 0.12146 10.5493C0.12146 16.0633 4.60746 20.5493 10.1215 20.5493C15.6355 20.5493 20.1215 16.0633 20.1215 10.5493C20.1215 5.03532 15.6355 0.549316 10.1215 0.549316ZM8.12246 14.9623L5.11691 11.9632C4.72616 11.5733 4.72537 10.9405 5.11515 10.5496C5.50517 10.1585 6.13847 10.1578 6.52939 10.548L8.12046 12.1363L12.7075 7.54932C13.0979 7.15885 13.731 7.15885 14.1215 7.54932C14.5119 7.93978 14.5119 8.57285 14.1215 8.96332L8.12246 14.9623Z" fill="#2FAB73" />
                                        </svg>

                                    </div>
                                    <p className="text-primary-gray text-[16px] leading-[30px]">Powerfull online protection.</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.1215 0.549316C4.60746 0.549316 0.12146 5.03532 0.12146 10.5493C0.12146 16.0633 4.60746 20.5493 10.1215 20.5493C15.6355 20.5493 20.1215 16.0633 20.1215 10.5493C20.1215 5.03532 15.6355 0.549316 10.1215 0.549316ZM8.12246 14.9623L5.11691 11.9632C4.72616 11.5733 4.72537 10.9405 5.11515 10.5496C5.50517 10.1585 6.13847 10.1578 6.52939 10.548L8.12046 12.1363L12.7075 7.54932C13.0979 7.15885 13.731 7.15885 14.1215 7.54932C14.5119 7.93978 14.5119 8.57285 14.1215 8.96332L8.12246 14.9623Z" fill="#2FAB73" />
                                        </svg>

                                    </div>
                                    <p className="text-primary-gray text-[16px] leading-[30px]">Powerfull online protection.</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.1215 0.549316C4.60746 0.549316 0.12146 5.03532 0.12146 10.5493C0.12146 16.0633 4.60746 20.5493 10.1215 20.5493C15.6355 20.5493 20.1215 16.0633 20.1215 10.5493C20.1215 5.03532 15.6355 0.549316 10.1215 0.549316ZM8.12246 14.9623L5.11691 11.9632C4.72616 11.5733 4.72537 10.9405 5.11515 10.5496C5.50517 10.1585 6.13847 10.1578 6.52939 10.548L8.12046 12.1363L12.7075 7.54932C13.0979 7.15885 13.731 7.15885 14.1215 7.54932C14.5119 7.93978 14.5119 8.57285 14.1215 8.96332L8.12246 14.9623Z" fill="#2FAB73" />
                                        </svg>

                                    </div>
                                    <p className="text-primary-gray text-[16px] leading-[30px]">Powerfull online protection.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20 xl:mt-44 xl:px-20 gap-x-10 gap-y-5">
                    <h1 className="leading-[50px] text-[50px] font-bold text-primary-blue">About us</h1>
                    <div className="flex flex-col gap-5">
                        <Image className="w-14 h-14 rounded-full" src={heroImage} alt="image" width={100} height={100} />
                        <h1 className="leading-[50px] text-[35px] font-bold text-primary-blue">Our Missiom</h1>
                        <p className="text-primary-gray text-[16px] leading-[30px]">Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that{"'"}s easy on the eyes.</p>

                    </div>
                    <div className="flex flex-col gap-5">
                        <Image className="w-14 h-14 rounded-full" src={heroImage} alt="image" width={100} height={100} />
                        <h1 className="leading-[50px] text-[35px] font-bold text-primary-blue">Our Missiom</h1>
                        <p className="text-primary-gray text-[16px] leading-[30px]">Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that{"'"}s easy on the eyes.</p>

                    </div>
                </section>

                <section className="w-full flex flex-col mt-20 xl:mt-40 gap-10">
                    <h1 className="leading-[50px] text-[50px] font-bold text-primary-blue">Check talents</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 grid-rows-2 w-full gap-10">
                        <div className="relative cols-span-1 xl:col-span-3 row-span-1">

                            <div className="h-[26vh] relative">
                                <Image className="w-full rounded-[10px] h-full object-cover" src={post3} alt="image" width={100} height={100} />

                                <div className="absolute bottom-0 left-0 px-10 py-1 bg-slate-200 text-primary-blue font-bold">
                                    <p>Music</p>
                                </div>
                            </div>
                            <div className="  flex flex-col gap-2 mt-3">
                                <h1 className="font-bold text-primary-blue text-[24px]">Provide a network</h1>
                                <p className="text-primary-gray text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us. Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us. Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                                <Button text="Read more" className="border border-primary-orange text-primary-orange" />
                            </div>
                        </div>

                        <div className="relative col-span-1">
                            <div className="relative">
                                <Image className="w-full rounded-[10px]" src={post3} alt="image" width={100} height={100} />
                                <div className="absolute bottom-0 left-0 px-10 py-1 bg-slate-200 text-primary-blue font-bold">
                                    <p>Music</p>
                                </div>

                            </div>
                            <div className="  flex flex-col gap-2 mt-3">
                                <h1 className="font-bold text-primary-blue text-[24px]">Provide a network</h1>
                                <p className="text-primary-gray text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                                <Button text="Read more" className="border border-primary-orange text-primary-orange" />
                            </div>
                        </div>
                        <div className="relative col-span-1 mt-[-160px] md:mt-0 xl:mt-0">
                            <div className="relative">
                                <Image className="w-full rounded-[10px]" src={post3} alt="image" width={100} height={100} />
                                <div className="absolute bottom-0 left-0 px-10 py-1 bg-slate-200 text-primary-blue font-bold">
                                    <p>Music</p>
                                </div>

                            </div>
                            <div className="  flex flex-col gap-2 mt-3">
                                <h1 className="font-bold text-primary-blue text-[24px]">Provide a network</h1>
                                <p className="text-primary-gray text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                                <Button text="Read more" className="border border-primary-orange text-primary-orange" />
                            </div>
                        </div>

                        <div className="relative col-span-1">
                            <div className="relative">
                                <Image className="w-full rounded-[10px]" src={post3} alt="image" width={100} height={100} />
                                <div className="absolute bottom-0 left-0 px-10 py-1 bg-slate-200 text-primary-blue font-bold">
                                    <p>Music</p>
                                </div>

                            </div>
                            <div className="  flex flex-col gap-2 mt-3">
                                <h1 className="font-bold text-primary-blue text-[24px]">Provide a network</h1>
                                <p className="text-primary-gray text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                                <Button text="Read more" className="border border-primary-orange text-primary-orange" />
                            </div>
                        </div>

                        <div className="relative col-span-1">
                            <div className="relative">
                                <Image className="w-full rounded-[10px]" src={post3} alt="image" width={100} height={100} />
                                <div className="absolute bottom-0 left-0 px-10 py-1 bg-slate-200 text-primary-blue font-bold">
                                    <p>Music</p>
                                </div>

                            </div>
                            <div className="  flex flex-col gap-2 mt-3">
                                <h1 className="font-bold text-primary-blue text-[24px]">Provide a network</h1>
                                <p className="text-primary-gray text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                                <Button text="Read more" className="border border-primary-orange text-primary-orange" />
                            </div>
                        </div>

                        <div className="relative col-span-1">
                            <div className="relative">
                                <Image className="w-full rounded-[10px]" src={post3} alt="image" width={100} height={100} />
                                <div className="absolute bottom-0 left-0 px-10 py-1 bg-slate-200 text-primary-blue font-bold">
                                    <p>Music</p>
                                </div>

                            </div>
                            <div className="  flex flex-col gap-2 mt-3">
                                <h1 className="font-bold text-primary-blue text-[24px]">Provide a network</h1>
                                <p className="text-primary-gray text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                                <Button text="Read more" className="border border-primary-orange text-primary-orange" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex gap-3 justify-between mt-10 xl:mt-44 w-3/5 flex-wrap">
                    <Image className="w-28 h-10" src={net} alt="image" width={100} height={100} />
                    <Image className="w-28 h-10" src={red} alt="image" width={100} height={100} />
                    <Image className="w-28 h-10" src={discord} alt="image" width={100} height={100} />
                    <Image className="w-28 h-10" src={spotify} alt="image" width={100} height={100} />
                    <Image className="w-32 xl:h-40   xl:mt-[-50px]" src={amazon} alt="image" width={100} height={100} />



                </section>



            </PageWrapper>
           <Footer />
        </>

    );
}

export default Landing;