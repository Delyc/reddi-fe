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
import Navbar from "../layouts/Navbar";
import { useRouter } from "next/router";


const Login = () => {
  const userData = {
    username: "",
    password: "",
  };

  const [userLogin, setUserLogin] = useState(userData);
  const inputHandler = (e: any) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    await userLoginFunc("accounts/login", userLogin)
      .then((res) => {
        e.preventDefault();
         localStorage.setItem("user", JSON.stringify(userLogin));
         localStorage.setItem("token", res.data.data.token);
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
        <Navbar />
        <ContentWrapper className="flex items-center">
          <div className="w-full h-fit flex flex-col items-center gap-5 justify-center">
            <h1>Login</h1>
            <form className="flex flex-col gap-5 w-2/5">
      
              <div className="flex relative items-center w-full">
                <Email classname="absolute left-5" fill="#ffffff" />
                <Input
                  className="w-full px-14"
                  placeholder="User name"
                  name="username"
                  onChange={inputHandler}
                />
              </div>

              <div className="flex relative items-center w-full">
                <Email classname="absolute left-5" fill="#ffffff" />
                <Input
                  className="w-full px-14"
                  placeholder="Password"
                  name="password"
                  onChange={inputHandler}
                />
              </div>


              <Button type="submit" text="Login" onClick={onSubmit} />
            </form>
          </div>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default Login;
