import Image from "next/image";
import Button from "../ui/Button";
import heroImage from '../../public/assets/heroimage.png'

const Hero = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-20 gap-y-10 mt-24 md:mt-44 xl:mt-44 xl:px-20">
            <div className="flex flex-col gap-5 mt-10">
                <h1 className="text-[40px] xl:text-[55px] font-bold text-primary-blue">Want anything to be easy with <span className="text-primary-orange">BeMyVoice</span> .</h1>
                <p className="text-primary-gray text-[16px] leading-[30px]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                <Button className="bg-primary-orange text-white w-44 rounded-[5px]" text="Get started" />
            </div>
            <div className="flex md:justify-centerh-[10rem] md:h-[30rem] ">
                <Image className="w-5/6 object-contain h-full " src={heroImage} alt="hero image" width={100} height={100} />
            </div>
        </section>
    );
}

export default Hero;