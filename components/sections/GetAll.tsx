import { useState, useEffect } from "react";
import { getAllRedditsFunc, getSubRedditsFunc } from "../../utils/functions";
import Image from "next/image";
import postImage from '../../public/assets/post3.webp'
import Link from "next/link";
import getUserToken from "../../utils/getUserToken";
import { userAgent } from "next/server";

const GetAll = () => {
    const [sub, setSub] = useState<any>();
    const [reddits, setRedits] = useState<any>();
    const [token, setToken] = useState("")

let user = localStorage.getItem("user")
    console.log("userna,e", user)

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
                                    <p className="text-primary-blue text-lg  leading-[30px]">{reddit.body} <span>posted by {localStorage.getItem("user")}</span></p>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-primary-orange">Read More</p>
                                        <svg className="w-8 h-8" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 9.98V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H14" stroke="#eb5b39" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <g opacity="0.4">
                                                <path d="M13 11.0005L18.01 5.98047H14" stroke="#eb5b39" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M18.0098 5.98047V9.99047" stroke="#eb5b39" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <path opacity="0.4" d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z" stroke="#eb5b39" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
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