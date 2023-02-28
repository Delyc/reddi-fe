import { useState, useEffect } from "react";
import { getAllRedditsFunc, getSubRedditsFunc } from "../../utils/functions";
import Image from "next/image";
import postImage from '../../public/assets/post3.webp'
import Link from "next/link";
import getUserToken from "../../utils/getUserToken";
import { userAgent } from "next/server";
import getUserDetails from "utils/getUserDetails";
import Readmore from "../svgs/Readmore";

const GetAll = () => {
    const [sub, setSub] = useState<any>();
    const [reddits, setRedits] = useState<any>();
    const [token, setToken] = useState("")
    const [user, setUser] = useState<any>("")

    //accessing local storage from useEffect 
    // useEffect(() => {
    //     return setUser(getUserDetails())
    // })

    useEffect(() => {
        return setToken(getUserToken());

    }, [])

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
            <section className="flex flex-col gap-5 pr-6">
                {reddits ?
                    reddits.map((reddit: any, index: number) => {
                        return (
                            <Link key={index} href={`/readMore/${reddit._id}`} className="flex flex-col gap-5 relative">
                                <div className="mt-10 xl:px-16 bg-white relative py-5 flex flex-col gap-3">
                                    <p className="text-primary-orange font-semibold text-xl">{reddit.title}</p>
                                    <div className="relative xl:h-80 h-64 w-full">
                                        <Image layout="fill" className="relative rounded-xl" src={reddit.image} alt="post image"/>
                                        {sub.map((sub: any, index: number) => {
                                            return (
                                                <p className="absolute px-5 text-white font-bold py-1 flex justify-center w-24 bg-black/50 top-0 right-0" key={index}>{sub._id === reddit.subreddit ? sub.title : ""}</p>
                                            )
                                        })}
                                    </div>
                                    <p className="text-primary-blue text-lg  leading-[30px]">{reddit.body} Posted by<span className="font-bold text-primary-orange"> {user.username}</span></p>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-primary-orange">Read More</p>
                                        <Readmore />
                                    </div>
                                </div>
                            </Link>
                        )

                    }) : <h1>Loading</h1>

                }
            </section>
        </>
    );
}

export default GetAll;