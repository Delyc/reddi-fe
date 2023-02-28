import { useSelector } from "react-redux";

const test = () => {
    const getAllPost = useSelector((state:any)=> state.FetchPosts)
    console.log(getAllPost.posts)
    return ( 
        <>
        <h1>test</h1>
        </>
     );
}
 
export default test;