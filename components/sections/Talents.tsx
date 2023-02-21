import posts from "data/posts";
import { Heading1, Heading3, Paragraph } from "@/components/ui/Typography";
import Image from "next/image";
import centerNavItems from "data/centerNavItems";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import PageWrapper from "@/components/wrappers/PageWrapper";
import { useSelector } from "react-redux"
import GetAll from "@/components/sections/GetAll";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key, useEffect } from "react";
import { UrlObject } from "url";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { getAllRedditsFunc, getSubRedditsFunc } from "utils/functions";
import postImage from '../../public/assets/post3.webp'



const Talents = () => {
    const name = useSelector((state: any) => state.UserSignup.firstName)
    const [whichOne, setWhichOne] = useState<any>("")
    const [isFlipped, setIsflipped] = useState(false);
    function handleClick() {
        setIsflipped(!isFlipped);
    }

    const [sub, setSub] = useState()
    const [redits, setRedits] = useState<any>()


    useEffect(() => {
        const getRedditsSubReddits = async () => {
            try {
                const res = await getSubRedditsFunc("reddits/sub", {
                    headers: { authorization: "Bearer " + localStorage.getItem("token") },
                });
                const res2 = await getAllRedditsFunc("reddits/all");
                setSub(res.data.data.reddits);
                setRedits(res2.data.data.reddits);
                console.log("sub", res2.data.data.reddits);
                console.log("sub", res.data.data.reddits);
            } catch (error) {
                console.log(error);
            }
        };
        getRedditsSubReddits();
    }, []);


    console.log("name", name)
    return (
        <>
            <PageWrapper>
                {/* <SideNavBarWrapper /> */}
                <Navbar />


                <ContentWrapper>
                    <div>
                        <Heading1>Trending Posts</Heading1>

                        <div className=" grid grid-cols-1 xl:grid-cols-4 relative gap-x-10 w-full mt-10">
                            {/* {posts.map((post: any, index: number) => {
                                return ( */}
                            <div className="grid h-64 p-2 bg-white rounded-md w-44 ">
                               
                                    { redits ?
                                    redits.map((redit: any, index: number) => {
                                        return (
                                            <>
                                             <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                                            <div
                                                className="grid w-full h-full gap-2 bg-red-500"
                                                onMouseEnter={() => handleClick()}
                                                onMouseLeave={() => handleClick()}
                                            >
                                                <Image className="" src={postImage} alt="Post image" width={100} height={100} />
                                                {/* <img src={image} alt={name} /> */}
                                                {/* <label className="font-bold">{name}</label> */}
                                                {/* <label className="">
        {type.map((el, index) => {
            return (
                <span className="mr-1" key={index}>
                    {el}
                </span>
            );
        })}
    </label> */}
                                            </div><div
                                                className="grid w-full h-full gap-2 bg-gray-200 place-content-center"
                                                onClick={() => handleClick()}
                                            >
                                                    <span className="flex gap-2">
                                                        <span>HP:</span>
                                                        {/* <span>{otherSpecs.hp}</span> */}
                                                    </span>


                                                </div>
                                                </ReactCardFlip></>

                                        ) 
                                    }) : <h1>Loading</h1>
                                }

                            </div>


                            {/* //     )
                            // })} */}
                        </div>
                    </div>

                    <div>
                        <Heading1>Popular Posts</Heading1>
                        <div className="grid grid-cols-3 w-full gap-x-10 mt-5">
                            <div className=" col-span-2">
                                <div className="bg-white py-6 rounded-md  px-20 border">
                                    <ul className="flex justify-between ">
                                        {centerNavItems.map((centerNavItem: { path: string | UrlObject; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) => {
                                            return (
                                                <span onClick={(() => setWhichOne(centerNavItem.title))} key={index}>{centerNavItem.title}</span>

                                            )
                                        })}
                                    </ul>
                                </div>
                                <GetAll whichOne={whichOne} />
                            </div>





                            {/* <div className="flex flex-col gap-4 px-10 py-10 h-80 fixed bottom-[50%] bg-[#c0c0c0] top-[60%] right-[20%] z-50">
                                <p>Sub reddit one</p>
                                <p>Sub reddit one</p>
                                <p>Sub reddit one</p>
                                <p>Sub reddit one</p>
                                <p>Sub reddit one</p>
                                <p>Sub reddit one</p>
                                <p>Sub reddit one</p>

                            </div> */}
                        </div>
                        <div className=" flex justify-end bottom-10 sticky mr-0">
                            <Button text="Back to top" className=" rounded-full" />

                        </div>


                    </div>
                </ContentWrapper>

            </PageWrapper>
            <Footer />
        </>
    );
}

export default Talents;