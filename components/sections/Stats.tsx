import UserIcon from "../svgs/UserIcon";

const Stats = () => {
    return (
        <section className="grid grid-cols-3 divide-x w-full xl:w-4/5 bg-white shadow-2xl mt-10 xl:mt-5 py-5 xl:py-10 rounded-xl mb-44 ">
            <div className="xl:flex xl:flex-row flex flex-col items-center gap-4 justify-center">
                <div className="bg-primary-orange/20 w-12 h-12 rounded-full flex justify-center items-center">
                    <UserIcon />
                </div>
                <div>
                    <p className="font-extrabold text-primary-blue text-[20px]">90+</p>
                    <p className="text-primary-blue">Users</p>
                </div>
            </div>

            <div className="xl:flex xl:flex-row flex flex-col items-center gap-4 justify-center">
                <div className="bg-primary-orange/20 w-12 h-12 rounded-full flex justify-center items-center">
                    <UserIcon />
                </div>
                <div>
                    <p className="font-extrabold text-primary-blue text-[20px]">90+</p>
                    <p className="text-primary-blue">Users</p>
                </div>
            </div>

            <div className="xl:flex xl:flex-row flex flex-col items-center gap-4 justify-center">
                <div className="bg-primary-orange/20 w-12 h-12 rounded-full flex justify-center items-center">
                    <UserIcon />
                </div>
                <div>
                    <p className="font-extrabold text-primary-blue text-[20px]">90+</p>
                    <p className="text-primary-blue">Users</p>
                </div>
            </div>
        </section>
    );
}

export default Stats;