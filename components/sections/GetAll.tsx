import { useState, useEffect } from "react";
import { getAllRedditsFunc, getSubRedditsFunc } from "@/utils/functions";
import Image from "next/image";
import postImage from '../../public/assets/post3.webp'


const GetAll = () => {
    const [sub, setSub] = useState<any>();
    const [reddits, setRedits] = useState<any>();



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
            {reddits ?
                reddits.map((reddit: any, index: number) => {
                
                    console.log("sub check", sub)
                    return (
                        <div key={index} className="mt-10 px-16 bg-white flex flex-col gap-5 py-5">
                            <p>{reddit.title}</p>
                            <Image className="w-full h-64 object-fill" src={postImage} alt="post image" width={100} height={100} />
                            <p>{reddit.body}</p>
                            {sub.map((sub: any, index: number) => {
                        return(
                            
                            <p>{sub._id === reddit.subreddit ? sub.title : ""}</p>
                            // <div>hello {sub._id}</div>
                        )
                    })}

                            <div className="flex gap-4">
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