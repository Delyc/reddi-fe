import SideNavBarWrapper from "../wrappers/SideNavBarWrapper";
import PageWrapper from "../wrappers/PageWrapper";
import ContentWrapper from "../wrappers/ContentWrapper";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Email from "../svgs/FormSvgs";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addSubRedditFunc } from "../../utils/functions";
import getUserToken from "utils/getUserToken";

const CreateSubReddit = () => {
  const [token , setToken] = useState("")

  useEffect(() => {
    console.log(getUserToken());
    return setToken(getUserToken());

  }, [])

  const subRedditData = {
    title: "",
    summary: "",
  };

  const [subReddit, setSubReddit] = useState(subRedditData);
  const inputHandler = (e: any) => {
    setSubReddit({ ...subReddit, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    await addSubRedditFunc("reddits", subReddit, {
      authorization: "Bearer " + token,
    })
      .then((res) => {
        e.preventDefault();

        // dispatch(setUserFirstName(userSignup.firstName));
        toast.success("sign up success");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <PageWrapper>
        <SideNavBarWrapper />
        <ContentWrapper className="flex items-center">
          <div className="w-full h-fit flex flex-col items-center gap-5 justify-center">
            <h1>Login</h1>
            <form className="flex flex-col gap-5 w-2/5">
              <div className="flex relative items-center w-full">
                <Email classname="absolute left-5" fill="#ffffff" />
                <Input
                  className="w-full px-14"
                  placeholder="Sub Reddit name"
                  name="title"
                  onChange={inputHandler}
                />
              </div>

              <div className="flex relative items-center w-full">
                <Email classname="absolute left-5" fill="#ffffff" />
                <Input
                  className="w-full px-14"
                  placeholder="Sub Reddit name"
                  name="summary"
                  onChange={inputHandler}
                />
              </div>

              <Button type="submit" text="Sign up" onClick={onSubmit} />
            </form>
          </div>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default CreateSubReddit;
