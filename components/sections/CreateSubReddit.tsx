import SideNavBarWrapper from "../wrappers/SideNavBarWrapper";
import PageWrapper from "../wrappers/PageWrapper";
import ContentWrapper from "../wrappers/ContentWrapper";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Email from "../svgs/FormSvgs";
import { useState } from "react";
import { userSignupFunc } from "@/utils/functions";
import { userLoginFunc } from "@/utils/functions";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserFirstName } from "@/redux/reducers/UserSignupSlice";
import { addSubRedditFunc } from "@/utils/functions";

const CreateSubReddit = () => {
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
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
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
