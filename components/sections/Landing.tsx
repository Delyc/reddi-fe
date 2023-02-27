


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
import WhatWeDo from "./WhatWeDo";
import AboutUs from "./AboutUs";

const Landing = () => {
    return (
        <>

           <PageWrapper>
                <Navbar  />
                <Hero />
                <Stats />
               
<WhatWeDo />
                




               

              <AboutUs /> 

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