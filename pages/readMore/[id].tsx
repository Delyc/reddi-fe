import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getOneRedditFunc } from "@/utils/functions";
import { useSelector } from "react-redux";
import Image from "next/image";
import { commentFunc } from "@/utils/functions";
import getUserToken from "@/utils/getUserToken";

const readMore = () => {
    const id = useSelector((state: any) => state.AllPosts.id)
    const [token , setToken] = useState("")

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
                //   setErr(error?.response?.data?.errors || error.message)
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
            <div className="more">
                {post ? (


                    <>

                        <div>
                            <p>{post.title}</p>
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

                        <div className="post-com">
                            <h4>commmets</h4>
                            <p>{comments.body}</p>
                            {/* {post.comments.map((comment: any) => {
              return <div className="comuser"> <p>{comment.body} by <span>{comment.user.firstName}</span>  </p> 
              
                </div>;
            })} */}
                        </div>
                    </>
                ) : (
                    <h1>Loading</h1>
                )}
            </div>
        </>
    );
}

export default readMore;