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

const GetAll = () => {
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
                headers: { authorization: "Bearer " + localStorage.getItem("token") }
            });
            console.log(res.data);
            e.target.innerHTML = `voted (${res.data.data.meta.upvotes})`;
        } catch (error) {
            console.log(error);
        }
    };
    const downvote = async (e: any, id: number) => {
        try {
            const res = await dislikePostFunc(`comments/${id}/down` , {
                headers: { authorization: "Bearer " + localStorage.getItem("token") }
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


    const [posts, setPosts]  = useState()
    dispatch(SubReddit(posts))

    return (
        <>
            {reddits ?
                reddits.map((reddit: any, index: number) => {
                    dispatch(setId(reddit._id))
                    return (
                        <div key={index} className="mt-10 px-16 bg-white flex flex-col gap-5 py-5">
                            <Link href={`/readMore/${reddit._id}`}>
                                <p>{reddit.title}</p>
                                <Image className="w-full h-64 object-fill" src={postImage} alt="post image" width={100} height={100} />
                                <p>{reddit.body}</p>
                            </Link>
                            {sub.map((sub: any, index: number) => {
                                return (

                                    <p key={index}>{sub._id === reddit.subreddit ? sub.title : ""}</p>
                                    // <div>hello {sub._id}</div>
                                )
                            })}

                            <div className="flex gap-4">

                                <button
                                    onClick={(e) => upvote(e, reddit._id)}

                                > like ({reddit?.meta?.upvotes || 0})
                                </button>
                                <button
                                    onClick={(e) => downvote(e, reddit._id)}

                                >
                                    dislike ({reddit?.meta?.downvotes || 0})
                                </button>
                                <p>Like</p>
                                <p>dislike</p>
                                <p>Comment</p>

                            </div>
                        </div>
                    )

                }) : <h1>Loading</h1>
            }

        </>
    );
}

export default GetAll;