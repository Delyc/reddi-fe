import Image from "next/image";
import heroImage from '../../public/assets/heroimage.png'

const AboutUs = () => {
    return ( 
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
     );
}
 
export default AboutUs;