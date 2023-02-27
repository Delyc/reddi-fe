import { Heading1 } from "@/components/ui/Typography";
import centerNavItems from "data/centerNavItems";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import PageWrapper from "@/components/wrappers/PageWrapper";
import GetAll from "@/components/sections/GetAll";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key, useEffect } from "react";
import { UrlObject } from "url";
import { useState } from "react";
import { getAllRedditsFunc, getSubRedditsFunc } from "utils/functions";
import categories from "data/categories";
import FlipCard from "../cards/FlipCard";

const Talents = () => {
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
            } catch (error) {
                console.log(error);
            }
        };
        getRedditsSubReddits();
    }, []);


    return (
        <>
            <PageWrapper>
                <Navbar />
                <ContentWrapper>
                    <Heading1>Trending Posts</Heading1>
                    <div className=" grid grid-cols-1 xl:grid-cols-4  relative gap-x-10 w-full mt-10">
                        {categories.map((category, index) => {
                            return (
                                <FlipCard key={index} image={category.image} backText={category.backText} />
                            )
                        })}
                    </div>
                    <div>
                        <Heading1>Popular Posts</Heading1>
                        <div className="grid xl:grid-cols-3 w-full gap-x-10 mt-5">
                            <div className=" xl:col-span-2 ">
                                <div className="bg-white py-6 rounded-md  px-20 border">
                                    <ul className="flex justify-between ">
                                        {centerNavItems.map((centerNavItem: { path: string | UrlObject; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) => {
                                            return (
                                                <span key={index}>{centerNavItem.title}</span>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <GetAll />
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </PageWrapper>
            <Footer />
        </>
    );
}

export default Talents;