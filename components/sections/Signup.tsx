import PageWrapper from "../wrappers/PageWrapper";
import ContentWrapper from "../wrappers/ContentWrapper";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { userSignupFunc } from "utils/functions";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserFirstName } from "redux/reducers/UserSignupSlice";
import { useRouter } from "next/router";
import Navbar from "../layouts/Navbar";
import Link from "next/link";
import ProfileIcon from "../svgs/ProfileIcon";
import EmailIcon from "../svgs/EmailIcon";
import PasswordIcon from "../svgs/PasswordIcon";

const Signup = () => {
  const userData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
  };

  const [userSignup, setUserSignup] = useState(userData);
  const inputHandler = (e: any) => {
    setUserSignup({ ...userSignup, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const route = useRouter()

  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log("clicked")

    await userSignupFunc("accounts/signup", userSignup)
      .then((res: any) => {
        e.preventDefault();
        dispatch(setUserFirstName(userSignup.firstName));
        toast.success("sign up success");
        route.push('/login')
      })
      .catch((err: any) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <PageWrapper>
        <Navbar />
        <ContentWrapper className="flex items-center">
          <div className="w-full h-fit flex flex-col items-center gap-5 justify-center">
            <h1>Sign up</h1>
            <form className="flex flex-col gap-5 w-2/5">
              <div className="flex relative items-center w-full">
                <ProfileIcon className="absolute left-5" />
                <Input
                  className="w-full px-14"
                  placeholder="First Name"
                  name="firstName"
                  onChange={inputHandler}
                />
              </div>
              <div className="flex relative items-center w-full">
                <ProfileIcon className="absolute left-5"/>
                <Input
                  className="w-full px-14"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={inputHandler}
                />
              </div>

              <div className="flex relative items-center w-full">
                <EmailIcon className="absolute left-5"/>
                <Input
                  className="w-full px-14"
                  placeholder="Email"
                  name="email"
                  onChange={inputHandler}
                />
              </div>

              <div className="flex relative items-center w-full">
                <PasswordIcon className="absolute left-5"/>
                <Input
                  className="w-full px-14"
                  placeholder="Password"
                  name="password"
                  onChange={inputHandler}
                />
              </div>

              <div className="flex relative items-center w-full">
                <ProfileIcon className="absolute left-5"/>
                <Input
                  className="w-full px-14"
                  placeholder="Username"
                  name="username"
                  onChange={inputHandler}
                />
              </div>

              <Button type="submit" text="Sign up" onClick={onSubmit} className="bg-[#eb5b39] text-white" />
            </form>
            <p className="text-gray-500">Already have an account? <span className="text-[#eb5b39] font-bold"><Link href="/login">Login</Link></span></p>
          </div>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default Signup;
