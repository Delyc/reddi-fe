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

    const handleClick = (id: number) => {
        setIsflipped(!isFlipped);


    }


    const [sub, setSub] = useState()
    const [redits, setRedits] = useState<any>()
    const [activeCard, setActiveCard] = useState(-1);
    const handleCardClick = (index: number) => {
        setActiveCard(index);
    };



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

                    <Heading1>Trending Posts</Heading1>

                    <div className=" grid grid-cols-1 xl:grid-cols-4  relative gap-x-10 w-full mt-10">
                        {redits ?

                            redits.map((card: any, index: number) => (
                                <ReactCardFlip key={index} isFlipped={activeCard === index} flipDirection="horizontal">
                                    <div className="front" onMouseEnter={() => handleCardClick(index)} onMouseLeave={() => handleCardClick(index)}>
                                        <h1>Front</h1>
                                    </div>
                                    <div className="back" onMouseEnter={() => handleCardClick(index)} onMouseLeave={() => handleCardClick(index)}>
                                        <h1>Back</h1>
                                    </div>
                                </ReactCardFlip>
                            )) : <h1>Loading</h1>
                        }






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