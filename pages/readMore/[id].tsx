import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { dislikePostFunc, getOneRedditFunc, likePostFunc } from "utils/functions";
import Image from "next/image";
import { commentFunc } from "utils/functions";
import getUserToken from "utils/getUserToken";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import PageWrapper from "@/components/wrappers/PageWrapper";
import postImage from '../../public/assets/post3.webp'
import { toast } from "react-toastify";

const ReadMore = () => {
    //all needed states
    const [token, setToken] = useState("")
    const [error, setError] = useState()
    const [post, setPost] = useState<any>([]);
    const [comments, setComments] = useState<any>([]);

    //getting post id from param
    const router = useRouter()
    const query = router.query
    const id = query.id;

    //getting user token from getUserToken function and set it in state
    useEffect(() => {
        return setToken(getUserToken());
    }, [])

    //fetching all posts
    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await getOneRedditFunc("reddits/sub/" + id);
                //setting posts in post state
                setPost(res.data.data.reddit);
                //setting comments in comment state
                setComments(res.data.data.comments);
            } catch (error) {
                console.log(error);
            }
        };
        getPost();
    }, []);


    const commentUrl = `comments/${id}`;

    const commentMessage = {
        body: ""
    }

    const [comment, setComment] = useState(commentMessage)

    const inputHandler = (e: any) => {
        setComment({ ...comment, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e: any) => {
        e.preventDefault();
        await commentFunc(commentUrl, comment, {
            authorization: "Bearer " + token,

        })
            .then((res) => {
                e.preventDefault();
                toast.success("Comment added successfully)")
            })
            .catch((err) => {
                setError(err.response.data.message)
                toast.error(`${err.response.data.message} Login again`)
            });
    };
    return (
        <>
            <PageWrapper >
                <Navbar />
                <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 lg:px-6 xl:grid-cols-3 xl:gap-10 py-12 md:px-20 md:py-20 xl:py-20 mt-20">
                    <div className="xl:col-span-2 lg:col-span-2">
                        {post ? (
                            <>
                                <div className="xl:px-20 mx-auto flex flex-col gap-3">
                                    <Image className="w-full xl:h-60 object-contain rounded-xl" src={post.image} alt="Post image" width={100} height={100} />
                                    <p className="text-xl text-primary-orange font-bold">{post.title}</p>
                                    <p>{post.body}</p>
                                </div>
                            </>
                        ) : (
                            <div className="w-full flex justify-center">
                                <h1>Loading ...</h1>
                            </div>
                        )}
                    </div>
                    <div className="post-com">
                        <div className="flex flex-col gap-3">
                            <h1>What{"'"}s on your mind ?!</h1>
                            <form action="" className="flex flex-col gap-3" >
                                <textarea
                                    className="form-control border py-5 px-5 shadow rounded-lg outline-none"
                                    placeholder="Leave your Comment here!"
                                    name="body"
                                    rows={5}
                                    onChange={inputHandler}
                                ></textarea>
                                <button className="comment bg-primary-orange text-white font-semibold rounded py-2 px-5 w-36" type="submit" onClick={onSubmit}>comment</button>
                            </form>
                        </div>
                        <div className="mt-10">
                            {comments.map((comment: any, index: number) => {
                                return <div key={index} className="comuser"> <p>{comment.body} by <span className="text-primary-orange font-bold">{comment.user.firstName}</span>  </p>
                                </div>;
                            })}
                        </div>
                    </div>
                </section>
            </PageWrapper>
            <Footer />
        </>
    );
}

export default ReadMore;