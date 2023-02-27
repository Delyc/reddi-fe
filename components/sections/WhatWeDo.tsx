import Tick from "../svgs/Tick";
import Image from "next/image";
import whatwedo from '../../public/assets/whatwedo.png'
const WhatWeDo = () => {
    return (
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
                                <Tick />
                            </div>
                            <p className="text-primary-gray text-[16px] leading-[30px]">Powerfull online protection.</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div>
                                <Tick />
                            </div>
                            <p className="text-primary-gray text-[16px] leading-[30px]">Powerfull online protection.</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div>
                                <Tick />
                            </div>
                            <p className="text-primary-gray text-[16px] leading-[30px]">Powerfull online protection.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;