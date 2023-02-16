import SideNavBarWrapper from "../wrappers/SideNavBarWrapper";
import PageWrapper from "../wrappers/PageWrapper";
import ContentWrapper from "../wrappers/ContentWrapper";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Email from "../svgs/FormSvgs";
import { useState, useEffect } from "react";
import { userSignupFunc } from "@/utils/functions";
import { userLoginFunc } from "@/utils/functions";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserFirstName } from "@/redux/reducers/UserSignupSlice";
import { addSubRedditFunc } from "@/utils/functions";
import getUserToken from "@/utils/getUserToken";
import { getRedditsOptionsFunc } from "@/utils/functions";
import { addRedditFunc } from "@/utils/functions";

const CreateReddit = () => {
  const [token, setToken] = useState("");
  const [options, setOptions] = useState<any>();
  
  useEffect(() => {
    console.log(getUserToken());
    return setToken(getUserToken());
  }, []);

   useEffect(() => {
     const getOpt = async () => {
       try {
         const res = await getRedditsOptionsFunc("reddits/options", {
           authorization: "Bearer " + token,
         });
         setOptions(res.data.data);
         console.log("sub", res.data);
       } catch (error) {
         console.log(error);
       }
     };
     getOpt();
   }, []);



    const createSub = async (e : any) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      console.log(formData);
      console.log(e.target);
      try {
        const res = await addRedditFunc("reddits/sub", formData, {
          // headers: {
            "Content-Type": "multipart/form-data",
            authorization: "Bearer " + token,
          // },
        });
        console.log(res.data);
      
      } catch (error) {
        console.log(error);
      }
    };



  

  // const subRedditData = {
  //   title: "",
  //   summary: "",
  // };

  // const [subReddit, setSubReddit] = useState(subRedditData);
  // const inputHandler = (e: any) => {
  //   setSubReddit({ ...subReddit, [e.target.name]: e.target.value });
  // };

  const dispatch = useDispatch();

  // const onSubmit = async (e: any) => {
  //   e.preventDefault();

  //   await addSubRedditFunc("reddits", subReddit, {
  //     authorization: "Bearer " + token,
  //   })
  //     .then((res) => {
  //       e.preventDefault();

  //       // dispatch(setUserFirstName(userSignup.firstName));
  //       toast.success("sign up success");
  //     })
  //     .catch((err) => {
  //       console.log("error", err);
  //     });
  // };

  return (
    <>
      <PageWrapper>
        <SideNavBarWrapper />
        <ContentWrapper className="flex items-center">
          <div className="form-post">
            {options ? (
              <form
                onSubmit={(e) => createSub(e)}
                encType="multipart/form-data"
              >
                <select name="subreddit" required className="form-control">
                  <option value="" hidden>
                    Select subreddit...
                  </option>
                  {options.map((option : any, index : any) => (
                    // <option key={option.id} value={option.id}>
                    <option key={index} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <input
                  className="img-fl"
                  type="file"
                  name="image"
                  accept="image/*"
                />
                <input
                  className="form-control"
                  name="title"
                  placeholder="title"
                />

                <textarea
                  className="form-control"
                  name="body"
                  required
                  placeholder="body"
                />
                <input className="btn-add-post" type="submit" value="Submit" />
              </form>
            ) : (
              "Loading"
            )}
          </div>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default CreateReddit;
