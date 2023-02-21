import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { dislikePostFunc, getOneRedditFunc, likePostFunc } from "utils/functions";
import { useSelector } from "react-redux";
import Image from "next/image";
import { commentFunc } from "utils/functions";
import getUserToken from "utils/getUserToken";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import PageWrapper from "@/components/wrappers/PageWrapper";

const ReadMore = () => {
    const [token, setToken] = useState("")
    const router = useRouter()
    const query = router.query
    const id = query.id;

    useEffect(() => {
        console.log(getUserToken());
        return setToken(getUserToken());

    }, [])


    const [post, setPost] = useState<any>([]);
    const [comments, setComments] = useState<any>([]);
    const [err, setErr] = useState("")
    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await getOneRedditFunc("reddits/sub/" + id);
                setPost(res.data.data.reddit);
                setComments(res.data.data.comments);
            } catch (error) {
                console.log(error);
            }
        };
        getPost();
    }, []);

    console.log("post", post)
    console.log("comments", comments)
    const commentUrl = `comments/${id}`;
    console.log("comment url", commentUrl)

    const commentMessage = {
        body: ""
    }

    const [comment, setComment] = useState(commentMessage)

    const inputHandler = (e: any) => {
        setComment({ ...comment, [e.target.name]: e.target.value });
    };

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


    const onSubmit = async (e: any) => {
        e.preventDefault();

        await commentFunc(commentUrl, comment, {
            authorization: "Bearer " + token,

        })
            .then((res) => {
                e.preventDefault();
                console.log(res)
            })
            .catch((err) => {
                console.log("error", err);
            });
    };
    return (
        <>
        <PageWrapper >

        <Navbar />
            <div className="more mt-20">
                {post ? (


                    <>

                        <div>
                            <p>{post.title}</p>
                            <p></p>
                            {/* <Image src={post.image} alt="imahe" width={100} height={100} /> */}
                        </div>



                        <div>
                            <form action="" >
                                <textarea
                                    className="form-control"
                                    placeholder="Comment"
                                    name="body"
                                    onChange={inputHandler}
                                ></textarea>
                                <button className="comment" type="submit" onClick={onSubmit}>comment</button>
                            </form>
                        </div>
                        <div className="flex gap-4">

                            <button
                                onClick={(e) => upvote(e, post._id)}

                            > like ({post?.meta?.upvotes || 0})
                            </button>
                            <button
                                onClick={(e) => downvote(e, post._id)}

                            >
                                dislike ({post?.meta?.downvotes || 0})
                            </button>
                            <p>Like</p>
                            <p>dislike</p>
                            <p>Comment</p>

                        </div>

                        <div className="post-com">
                            <h4>commmets</h4>

                            {comments.map((comment: any, index: number) => {
                                return <div key={index} className="comuser"> <p>{comment.body} by <span>{comment.user.firstName}</span>  </p>

                                </div>;
                            })}
                        </div>
                    </>
                ) : (
                    <h1>Loading</h1>
                )}
            </div>
            </PageWrapper>
            <Footer />
        </>
    );
}

export default ReadMore;