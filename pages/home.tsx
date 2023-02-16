import Button from "@/components/ui/Button";
import Image from "next/image";
import heroImage from '../public/assets/heroimage.png'
import net from '../public/assets/net.png'
import red from '../public/assets/red.png'
import amazon from '../public/assets/amazon.png'
import discord from '../public/assets/discord.png'
import spotify from '../public/assets/spotify.png'
import whatwedo from '../public/assets/whatwedo.png'

const home = () => {
    return (
        // <section className="bg-[#F6F6F6]">
        <section className="mx-auto max-w-[80rem] flex flex-col items-center ">
            <header className="flex justify-between items-center py-5 w-5/6 fixed z-50 bg-white">
                <h1 className="text-[#1d4865] font-bold text-3xl">BemyVoice</h1>
                <ul className="flex gap-10">
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Help</li>
                </ul>
                <div className="flex gap-10">
                    <Button className="bg-white border border-[#eb5b39] text-[#eb5b39] font-bold rounded-[50px]" text="Sign up" />
                    <Button className="bg-[#eb5b39]" text="Support us" />
                </div>
            </header>

            <section className="grid grid-cols-2 gap-x-20 mt-44 px-20">
                <div className="flex flex-col gap-5 mt-10">
                    <h1 className="text-[50px] font-bold text-[#1d4865]">Want anything to be easy with <span className="text-[#eb5b39]">LaslesVPN</span> .</h1>
                    <p className="text-[#4F5665] text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                    <Button className="bg-[#eb5b39] w-44 rounded-[5px]" text="Get started" />
                </div>
                <div className="flex justify-center h-[30rem]">
                    <Image className="w-5/6 object-contain h-full" src={heroImage} alt="hero image" width={100} height={100} />

                </div>

            </section>

            <section className="grid grid-cols-3 divide-x w-4/5 bg-white shadow-2xl mt-5 py-10 rounded-xl mb-44 ">
                <div className="flex items-center gap-4 justify-center">
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

                <div className="flex items-center gap-4 justify-center">
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

                <div className="flex items-center gap-4 justify-center">
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




            <section className="grid grid-cols-2 gap-x-20 px-400">
                <div className="flex justify-center">
                    <Image className="w-3/5" src={whatwedo} alt="what we do image" width={100} height={100} />
                </div>
                <div >
                    <div className="w-3/5 flex flex-col gap-5">
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

            <section className="grid grid-cols-3 mt-44 px-20 gap-x-10">
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

            <section className="flex justify-between mt-44 w-3/5">
                <Image className="w-28 h-10" src={net} alt="image" width={100} height={100} />
                <Image className="w-28 h-10" src={red} alt="image" width={100} height={100} />
                <Image className="w-32 h-40 mt-[-50px]" src={amazon} alt="image" width={100} height={100} />
                <Image className="w-28 h-10" src={discord} alt="image" width={100} height={100} />
                <Image className="w-28 h-10" src={spotify} alt="image" width={100} height={100} />


            </section>

        </section>

    );
}

export default home;