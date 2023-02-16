


import Button from "@/components/ui/Button";
import Image from "next/image";
import heroImage from '../../public/assets/heroimage.png'
import net from '../../public/assets/net.png'
import red from '../../public/assets/red.png'
import amazon from '../../public/assets/amazon.png'
import discord from '../../public/assets/discord.png'
import spotify from '../../public/assets/spotify.png'
import whatwedo from '../../public/assets/whatwedo.png'
import Input from "@/components/ui/Input";
import post3 from '../../public/assets/post3.webp'

const Landing = () => {
    return (
        // <section className="bg-[#F6F6F6]">
        <>

            <section className="px-6 xl:mx-auto xl:max-w-[80rem] flex flex-col items-center ">
                <header className="flex justify-between items-center py-5 w-full fixed z-50 px-6 xl:px-20 bg-white border-b">
                    <h1 className="text-[#1d4865] font-bold text-3xl">BeMyVoice</h1>
                    <div className="w-12 h-12 md:hidden">

                        <svg className="w-full h-full" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm1 4a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3z" fill="#eb5b39" /></svg>

                    </div>

                    <ul className="md:flex gap-10 hidden ">
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Help</li>
                    </ul>
                    <div className="md:flex gap-10 hidden ">
                        <Button className="bg-white border border-[#eb5b39] text-[#eb5b39] font-bold rounded-[50px]" text="Sign up" />
                        <Button className="bg-[#eb5b39] text-white" text="Support us" />
                    </div>
                </header>

                <section className="grid grid-cols-1 xl:grid-cols-2 gap-x-20 gap-y-10 mt-24 xl:mt-44 xl:px-20">
                    <div className="flex flex-col gap-5 mt-10">
                        <h1 className="text-[40px] xl:text-[55px] font-bold text-[#1d4865]">Want anything to be easy with <span className="text-[#eb5b39]">LaslesVPN</span> .</h1>
                        <p className="text-[#4F5665] text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                        <Button className="bg-[#eb5b39] text-white w-44 rounded-[5px]" text="Get started" />
                    </div>
                    <div className="flex xl:justify-center h-[10rem] xl:h-[30rem] ">
                        <Image className="w-5/6 object-contain h-full " src={heroImage} alt="hero image" width={100} height={100} />

                    </div>

                </section>

                <section className="grid grid-cols-3 divide-x w-full xl:w-4/5 bg-white shadow-2xl mt-10 xl:mt-5 py-5 xl:py-10 rounded-xl mb-44 ">
                    <div className="xl:flex xl:flex-row flex flex-col items-center gap-4 justify-center">
                        <div className="bg-[#eb5b39]/20 w-12 h-12 rounded-full flex justify-center items-center">
                            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50001 7.34929C9.45479 7.34929 10.3705 6.97001 11.0456 6.29488C11.7207 5.61975 12.1 4.70407 12.1 3.74929C12.1 2.79451 11.7207 1.87884 11.0456 1.20371C10.3705 0.528577 9.45479 0.149292 8.50001 0.149292C7.54523 0.149292 6.62955 0.528577 5.95442 1.20371C5.27929 1.87884 4.90001 2.79451 4.90001 3.74929C4.90001 4.70407 5.27929 5.61975 5.95442 6.29488C6.62955 6.97001 7.54523 7.34929 8.50001 7.34929ZM3.39866 18.1493C1.57686 18.1493 0.0422473 16.6179 0.739418 14.9347C1.16156 13.9156 1.7803 12.9896 2.56031 12.2096C3.34032 11.4296 4.26633 10.8108 5.28547 10.3887C6.3046 9.96656 7.3969 9.74929 8.50001 9.74929C9.60311 9.74929 10.6954 9.96656 11.7145 10.3887C12.7337 10.8108 13.6597 11.4296 14.4397 12.2096C15.2197 12.9896 15.8385 13.9156 16.2606 14.9347C16.9578 16.6179 15.4232 18.1493 13.6014 18.1493H3.39866Z" fill="#eb5b39" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-extrabold text-[#1d4865] text-[20px]">90+</p>
                            <p className="text-[#1d4865]">Users</p>
                        </div>
                    </div>

                    <div className="xl:flex xl:flex-row flex flex-col items-center gap-4 justify-center">
                        <div className="bg-[#eb5b39]/20 w-12 h-12 rounded-full flex justify-center items-center">
                            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50001 7.34929C9.45479 7.34929 10.3705 6.97001 11.0456 6.29488C11.7207 5.61975 12.1 4.70407 12.1 3.74929C12.1 2.79451 11.7207 1.87884 11.0456 1.20371C10.3705 0.528577 9.45479 0.149292 8.50001 0.149292C7.54523 0.149292 6.62955 0.528577 5.95442 1.20371C5.27929 1.87884 4.90001 2.79451 4.90001 3.74929C4.90001 4.70407 5.27929 5.61975 5.95442 6.29488C6.62955 6.97001 7.54523 7.34929 8.50001 7.34929ZM3.39866 18.1493C1.57686 18.1493 0.0422473 16.6179 0.739418 14.9347C1.16156 13.9156 1.7803 12.9896 2.56031 12.2096C3.34032 11.4296 4.26633 10.8108 5.28547 10.3887C6.3046 9.96656 7.3969 9.74929 8.50001 9.74929C9.60311 9.74929 10.6954 9.96656 11.7145 10.3887C12.7337 10.8108 13.6597 11.4296 14.4397 12.2096C15.2197 12.9896 15.8385 13.9156 16.2606 14.9347C16.9578 16.6179 15.4232 18.1493 13.6014 18.1493H3.39866Z" fill="#eb5b39" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-extrabold text-[#1d4865] text-[20px]">90+</p>
                            <p className="text-[#1d4865]">Users</p>
                        </div>
                    </div>

                    <div className="xl:flex xl:flex-row flex flex-col items-center gap-4 justify-center">
                        <div className="bg-[#eb5b39]/20 w-12 h-12 rounded-full flex justify-center items-center">
                            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50001 7.34929C9.45479 7.34929 10.3705 6.97001 11.0456 6.29488C11.7207 5.61975 12.1 4.70407 12.1 3.74929C12.1 2.79451 11.7207 1.87884 11.0456 1.20371C10.3705 0.528577 9.45479 0.149292 8.50001 0.149292C7.54523 0.149292 6.62955 0.528577 5.95442 1.20371C5.27929 1.87884 4.90001 2.79451 4.90001 3.74929C4.90001 4.70407 5.27929 5.61975 5.95442 6.29488C6.62955 6.97001 7.54523 7.34929 8.50001 7.34929ZM3.39866 18.1493C1.57686 18.1493 0.0422473 16.6179 0.739418 14.9347C1.16156 13.9156 1.7803 12.9896 2.56031 12.2096C3.34032 11.4296 4.26633 10.8108 5.28547 10.3887C6.3046 9.96656 7.3969 9.74929 8.50001 9.74929C9.60311 9.74929 10.6954 9.96656 11.7145 10.3887C12.7337 10.8108 13.6597 11.4296 14.4397 12.2096C15.2197 12.9896 15.8385 13.9156 16.2606 14.9347C16.9578 16.6179 15.4232 18.1493 13.6014 18.1493H3.39866Z" fill="#eb5b39" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-extrabold text-[#1d4865] text-[20px]">90+</p>
                            <p className="text-[#1d4865]">Users</p>
                        </div>
                    </div>
                </section>




                <section className="grid grid-cols-1 xl:grid-cols-2 gap-x-20 xl:px-400">
                    <div className="flex justify-center">
                        <Image className="w-3/5" src={whatwedo} alt="what we do image" width={100} height={100} />
                    </div>
                    <div >
                        <div className="xl:w-3/5 flex flex-col gap-5">
                            <h1 className="leading-[50px] text-[35px] font-bold text-[#1d4865]">We Provide Many Features You Can Use</h1>
                            <p className="text-[#4F5665] text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.1215 0.549316C4.60746 0.549316 0.12146 5.03532 0.12146 10.5493C0.12146 16.0633 4.60746 20.5493 10.1215 20.5493C15.6355 20.5493 20.1215 16.0633 20.1215 10.5493C20.1215 5.03532 15.6355 0.549316 10.1215 0.549316ZM8.12246 14.9623L5.11691 11.9632C4.72616 11.5733 4.72537 10.9405 5.11515 10.5496C5.50517 10.1585 6.13847 10.1578 6.52939 10.548L8.12046 12.1363L12.7075 7.54932C13.0979 7.15885 13.731 7.15885 14.1215 7.54932C14.5119 7.93978 14.5119 8.57285 14.1215 8.96332L8.12246 14.9623Z" fill="#2FAB73" />
                                        </svg>

                                    </div>
                                    <p className="text-[#4F5665] text-[16px] leading-[30px]">Powerfull online protection.</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.1215 0.549316C4.60746 0.549316 0.12146 5.03532 0.12146 10.5493C0.12146 16.0633 4.60746 20.5493 10.1215 20.5493C15.6355 20.5493 20.1215 16.0633 20.1215 10.5493C20.1215 5.03532 15.6355 0.549316 10.1215 0.549316ZM8.12246 14.9623L5.11691 11.9632C4.72616 11.5733 4.72537 10.9405 5.11515 10.5496C5.50517 10.1585 6.13847 10.1578 6.52939 10.548L8.12046 12.1363L12.7075 7.54932C13.0979 7.15885 13.731 7.15885 14.1215 7.54932C14.5119 7.93978 14.5119 8.57285 14.1215 8.96332L8.12246 14.9623Z" fill="#2FAB73" />
                                        </svg>

                                    </div>
                                    <p className="text-[#4F5665] text-[16px] leading-[30px]">Powerfull online protection.</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.1215 0.549316C4.60746 0.549316 0.12146 5.03532 0.12146 10.5493C0.12146 16.0633 4.60746 20.5493 10.1215 20.5493C15.6355 20.5493 20.1215 16.0633 20.1215 10.5493C20.1215 5.03532 15.6355 0.549316 10.1215 0.549316ZM8.12246 14.9623L5.11691 11.9632C4.72616 11.5733 4.72537 10.9405 5.11515 10.5496C5.50517 10.1585 6.13847 10.1578 6.52939 10.548L8.12046 12.1363L12.7075 7.54932C13.0979 7.15885 13.731 7.15885 14.1215 7.54932C14.5119 7.93978 14.5119 8.57285 14.1215 8.96332L8.12246 14.9623Z" fill="#2FAB73" />
                                        </svg>

                                    </div>
                                    <p className="text-[#4F5665] text-[16px] leading-[30px]">Powerfull online protection.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 xl:grid-cols-3 mt-20 xl:mt-44 xl:px-20 gap-x-10 gap-y-5">
                    <h1 className="leading-[50px] text-[50px] font-bold text-[#1d4865]">About us</h1>
                    <div className="flex flex-col gap-5">
                        <Image className="w-14 h-14 rounded-full" src={heroImage} alt="image" width={100} height={100} />
                        <h1 className="leading-[50px] text-[35px] font-bold text-[#1d4865]">Our Missiom</h1>
                        <p className="text-[#4F5665] text-[16px] leading-[30px]">Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that's easy on the eyes.</p>

                    </div>
                    <div className="flex flex-col gap-5">
                        <Image className="w-14 h-14 rounded-full" src={heroImage} alt="image" width={100} height={100} />
                        <h1 className="leading-[50px] text-[35px] font-bold text-[#1d4865]">Our Missiom</h1>
                        <p className="text-[#4F5665] text-[16px] leading-[30px]">Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that's easy on the eyes.</p>

                    </div>
                </section>




                <section className="w-full flex flex-col mt-20 xl:mt-40 gap-10">
                    <h1 className="leading-[50px] text-[50px] font-bold text-[#1d4865]">Check talents</h1>

                    <div className="grid grid-cols-1 xl:grid-cols-4 grid-rows-2 w-full gap-10">
                        <div className="relative cols-span-1 xl:col-span-3 row-span-1">

                            <div className="h-[26vh] relative">
                                <Image className="w-full rounded-[10px] h-full object-cover" src={post3} alt="image" width={100} height={100} />

                                <div className="absolute bottom-0 left-0 px-10 py-1 bg-slate-200 text-[#1d4865] font-bold">
                                    <p>Music</p>
                                </div>
                            </div>
                            <div className="  flex flex-col gap-2 mt-3">
                                <h1 className="font-bold text-[#1d4865] text-[24px]">Provide a network</h1>
                                <p className="text-[#4F5665] text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us. Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us. Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                                <Button text="Read more" className="border border-[#eb5b39] text-[#eb5b39]" />
                            </div>
                        </div>

                        <div className="relative col-span-1">
                            <div className="relative">
                                <Image className="w-full rounded-[10px]" src={post3} alt="image" width={100} height={100} />
                                <div className="absolute bottom-0 left-0 px-10 py-1 bg-slate-200 text-[#1d4865] font-bold">
                                    <p>Music</p>
                                </div>

                            </div>
                            <div className="  flex flex-col gap-2 mt-3">
                                <h1 className="font-bold text-[#1d4865] text-[24px]">Provide a network</h1>
                                <p className="text-[#4F5665] text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                                <Button text="Read more" className="border border-[#eb5b39] text-[#eb5b39]" />
                            </div>
                        </div>
                        <div className="relative col-span-1 mt-[-160px] xl:mt-0">
                            <div className="relative">
                                <Image className="w-full rounded-[10px]" src={post3} alt="image" width={100} height={100} />
                                <div className="absolute bottom-0 left-0 px-10 py-1 bg-slate-200 text-[#1d4865] font-bold">
                                    <p>Music</p>
                                </div>

                            </div>
                            <div className="  flex flex-col gap-2 mt-3">
                                <h1 className="font-bold text-[#1d4865] text-[24px]">Provide a network</h1>
                                <p className="text-[#4F5665] text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                                <Button text="Read more" className="border border-[#eb5b39] text-[#eb5b39]" />
                            </div>
                        </div>

                        <div className="relative col-span-1">
                            <div className="relative">
                                <Image className="w-full rounded-[10px]" src={post3} alt="image" width={100} height={100} />
                                <div className="absolute bottom-0 left-0 px-10 py-1 bg-slate-200 text-[#1d4865] font-bold">
                                    <p>Music</p>
                                </div>

                            </div>
                            <div className="  flex flex-col gap-2 mt-3">
                                <h1 className="font-bold text-[#1d4865] text-[24px]">Provide a network</h1>
                                <p className="text-[#4F5665] text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                                <Button text="Read more" className="border border-[#eb5b39] text-[#eb5b39]" />
                            </div>
                        </div>

                        <div className="relative col-span-1">
                            <div className="relative">
                                <Image className="w-full rounded-[10px]" src={post3} alt="image" width={100} height={100} />
                                <div className="absolute bottom-0 left-0 px-10 py-1 bg-slate-200 text-[#1d4865] font-bold">
                                    <p>Music</p>
                                </div>

                            </div>
                            <div className="  flex flex-col gap-2 mt-3">
                                <h1 className="font-bold text-[#1d4865] text-[24px]">Provide a network</h1>
                                <p className="text-[#4F5665] text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                                <Button text="Read more" className="border border-[#eb5b39] text-[#eb5b39]" />
                            </div>
                        </div>

                        <div className="relative col-span-1">
                            <div className="relative">
                                <Image className="w-full rounded-[10px]" src={post3} alt="image" width={100} height={100} />
                                <div className="absolute bottom-0 left-0 px-10 py-1 bg-slate-200 text-[#1d4865] font-bold">
                                    <p>Music</p>
                                </div>

                            </div>
                            <div className="  flex flex-col gap-2 mt-3">
                                <h1 className="font-bold text-[#1d4865] text-[24px]">Provide a network</h1>
                                <p className="text-[#4F5665] text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                                <Button text="Read more" className="border border-[#eb5b39] text-[#eb5b39]" />
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



            </section>
            <footer className="grid grid-col-1 xl:grid-cols-3 gap-x-20 mt-10 xl:mt-0 py-10 xl:py-20 px-6 bg-[#1d4865] xl:px-40 text-white/80">
                <div className="flex flex-col gap-5">
                    <h1 className="text-[35px] text-[#eb5b39] font-bold">BeMyVoice</h1>
                    <p className=" text-[16px] leading-[30px]">Producing, prototyping and testing sketches, high-fidelity wireframes .</p>
                    <div className="flex gap-3">
                        <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.8 0.580566C7.5215 0.580566 0 8.10207 0 17.3806C0 26.6591 7.5215 34.1806 16.8 34.1806C26.0785 34.1806 33.6 26.6591 33.6 17.3806C33.6 8.10207 26.0785 0.580566 16.8 0.580566ZM20.7795 12.1901H18.2543C17.955 12.1901 17.6225 12.5838 17.6225 13.1071V14.9306H20.7813L20.3035 17.5311H17.6225V25.3378H14.6423V17.5311H11.9385V14.9306H14.6423V13.4011C14.6423 11.2066 16.1648 9.42332 18.2543 9.42332H20.7795V12.1901Z" fill="white" />
                        </svg>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4 0.580566C8.12148 0.580566 0.599976 8.10207 0.599976 17.3806C0.599976 26.6591 8.12148 34.1806 17.4 34.1806C26.6785 34.1806 34.2 26.6591 34.2 17.3806C34.2 8.10207 26.6785 0.580566 17.4 0.580566ZM24.2337 14.3426C24.2407 14.4861 24.2425 14.6296 24.2425 14.7696C24.2425 19.1446 20.9157 24.1863 14.8292 24.1863C13.0307 24.1893 11.2697 23.6728 9.75773 22.6988C10.015 22.7303 10.2792 22.7426 10.547 22.7426C12.0975 22.7426 13.5237 22.2158 14.656 21.3268C13.966 21.3133 13.2974 21.0848 12.7434 20.6732C12.1894 20.2617 11.7777 19.6875 11.5655 19.0308C12.061 19.125 12.5715 19.1053 13.0582 18.9731C12.3093 18.8216 11.6358 18.4158 11.152 17.8245C10.6681 17.2331 10.4037 16.4926 10.4035 15.7286V15.6883C10.8497 15.9351 11.3607 16.0856 11.9032 16.1031C11.2011 15.6357 10.7041 14.9177 10.5138 14.0961C10.3235 13.2744 10.4543 12.411 10.8795 11.6826C11.7106 12.7046 12.7472 13.5406 13.922 14.1366C15.0968 14.7326 16.3836 15.0752 17.6992 15.1423C17.532 14.4324 17.604 13.687 17.904 13.0222C18.204 12.3574 18.7153 11.8103 19.3584 11.466C20.0014 11.1218 20.7402 10.9996 21.4598 11.1185C22.1794 11.2374 22.8396 11.5907 23.3377 12.1236C24.0783 11.9771 24.7884 11.7054 25.4377 11.3203C25.1909 12.0871 24.6742 12.7381 23.9835 13.1526C24.6395 13.0736 25.28 12.8972 25.884 12.6293C25.4403 13.2941 24.8815 13.8743 24.2337 14.3426Z" fill="white" />
                        </svg>
                        <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.25 17.3806C22.25 18.773 21.6968 20.1083 20.7123 21.0929C19.7277 22.0774 18.3923 22.6306 17 22.6306C15.6076 22.6306 14.2722 22.0774 13.2876 21.0929C12.3031 20.1083 11.75 18.773 11.75 17.3806C11.75 17.0813 11.7815 16.7891 11.8357 16.5056H9.99995V23.5003C9.99995 23.9868 10.3937 24.3806 10.8802 24.3806H23.1215C23.3546 24.3801 23.5781 24.2872 23.7428 24.1221C23.9075 23.9571 24 23.7335 24 23.5003V16.5056H22.1642C22.2185 16.7891 22.25 17.0813 22.25 17.3806ZM17 20.8806C17.4597 20.8805 17.9149 20.7898 18.3396 20.6137C18.7643 20.4377 19.1502 20.1797 19.4752 19.8546C19.8002 19.5294 20.058 19.1434 20.2338 18.7186C20.4096 18.2938 20.5001 17.8386 20.5 17.3788C20.4998 16.9191 20.4092 16.4639 20.2331 16.0392C20.0571 15.6145 19.7991 15.2286 19.474 14.9036C19.1488 14.5786 18.7628 14.3208 18.338 14.145C17.9132 13.9691 17.4579 13.8787 16.9982 13.8788C16.0697 13.8791 15.1793 14.2481 14.523 14.9048C13.8666 15.5615 13.498 16.4521 13.4982 17.3806C13.4984 18.3091 13.8675 19.1994 14.5242 19.8558C15.1809 20.5122 16.0715 20.8808 17 20.8806ZM21.2 13.7056H23.2982C23.4376 13.7056 23.5713 13.6503 23.6701 13.5519C23.7688 13.4535 23.8245 13.32 23.825 13.1806V11.0823C23.825 10.9426 23.7695 10.8086 23.6707 10.7098C23.5719 10.6111 23.4379 10.5556 23.2982 10.5556H21.2C21.0603 10.5556 20.9263 10.6111 20.8275 10.7098C20.7287 10.8086 20.6732 10.9426 20.6732 11.0823V13.1806C20.675 13.4693 20.9112 13.7056 21.2 13.7056ZM17 0.580566C12.5443 0.580566 8.27117 2.35056 5.12056 5.50117C1.96995 8.65178 0.199951 12.9249 0.199951 17.3806C0.199951 21.8362 1.96995 26.1094 5.12056 29.26C8.27117 32.4106 12.5443 34.1806 17 34.1806C19.2062 34.1806 21.3908 33.746 23.429 32.9017C25.4673 32.0575 27.3193 30.82 28.8794 29.26C30.4394 27.6999 31.6769 25.8479 32.5211 23.8097C33.3654 21.7714 33.8 19.5868 33.8 17.3806C33.8 15.1744 33.3654 12.9898 32.5211 10.9515C31.6769 8.91322 30.4394 7.0612 28.8794 5.50117C27.3193 3.94115 25.4673 2.70367 23.429 1.85939C21.3908 1.01511 19.2062 0.580566 17 0.580566ZM25.75 24.1863C25.75 25.2556 24.875 26.1306 23.8057 26.1306H10.1942C9.12495 26.1306 8.24995 25.2556 8.24995 24.1863V10.5748C8.24995 9.50557 9.12495 8.63057 10.1942 8.63057H23.8057C24.875 8.63057 25.75 9.50557 25.75 10.5748V24.1863Z" fill="white" />
                        </svg>

                    </div>
                </div>
                <div className="flex flex-col mt-5 xl:mt-0 gap-5 xl:items-center">
                    <h1 className="font-bold text-[20px] text-white mb-2 xl:mb-5">Quick Links</h1>
                    <ul className="flex flex-col ">
                        <li className="text-[16px] leading-[30px]">Home</li>
                        <li className=" text-[16px] leading-[30px]">Home</li>
                        <li className=" text-[16px] leading-[30px]">Home</li>
                        <li className=" text-[16px] leading-[30px]">Home</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-[20px] text-white mt-5 xl:mt-0 mb-5"> Contact us</h1>

                    <form className="flex flex-col gap-3">
                        <Input placeholder="Names" />
                        <Input placeholder="Email" />
                        <Input className="h-32" placeholder="Message" />
                        <Button className="bg-[#eb5b39] rounded-[3px]" text="Send" />
                    </form>
                </div>
            </footer>
        </>

    );
}

export default Landing;