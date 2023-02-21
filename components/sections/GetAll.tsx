import { useState, useEffect } from "react";
import { getAllRedditsFunc, getSubRedditsFunc } from "../../utils/functions";
import Image from "next/image";
import postImage from '../../public/assets/post3.webp'
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setId } from "../../redux/reducers/AllPostsSlice";
import { likePostFunc, dislikePostFunc } from "../../utils/functions";
import getUserToken from "../../utils/getUserToken";
import { SubReddit } from "../../redux/reducers/SubRedditSlice";
import centerNavItems from "data/centerNavItems";

const GetAll = ({ whichOne }: any) => {
    const dispatch = useDispatch()
    const [sub, setSub] = useState<any>();
    const [reddits, setRedits] = useState<any>();
    const [token, setToken] = useState("")

    useEffect(() => {
        console.log(getUserToken());
        return setToken(getUserToken());

    }, [])

    const upvote = async (e: any, id: number) => {
        try {
            const res = await likePostFunc(`comments/${id}/up`, {
                authorization: "Bearer " + token,
            });
            console.log(res.data);
            e.target.innerHTML = `voted (${res.data.data.meta.upvotes})`;
        } catch (error) {
            console.log(error);
        }
    };
    const downvote = async (e: any, id: number) => {
        try {
            const res = await dislikePostFunc(`comments/${id}/down`, {
                authorization: "Bearer " + token,
            });
            console.log(res.data);
            e.target.innerHTML = `downVoted(${res.data.data.meta.downvotes})`;
        } catch (error) {
            console.log(error);
        }
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


    return (
        <>
            <section className="flex flex-col gap-5">
                {reddits ?
                    reddits.map((reddit: any, index: number) => {
                        // dispatch(setId(reddit._id))
                        return (
                            <Link key={index}  href={`/readMore/${reddit._id}`} className="flex flex-col gap-5 relative">

                                <div className="mt-10 px-16 bg-white relative py-5">
                                    <p className="text-[#eb5b39] font-semibold text-xl">{reddit.title}</p>
                                    <div className="relative">
                                        <Image className="w-full h-64 object-fill rounded-xl" src={postImage} alt="post image" width={100} height={100} />
                                        {sub.map((sub: any, index: number) => {
                                            return (

                                                <p className="absolute px-5 text-white font-bold py-1 flex justify-center w-24 bg-black/50 top-0 right-0" key={index}>{sub._id === reddit.subreddit ? sub.title : ""}</p>
                                                // <div>hello {sub._id}</div>
                                            )
                                        })}
                                    </div>
                                    <p className="text-[#1d4865] text-lg  leading-[30px]">{reddit.body} <span></span></p>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-[#eb5b39]">Read More</p>
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