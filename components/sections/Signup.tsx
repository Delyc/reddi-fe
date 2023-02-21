import SideNavBarWrapper from "../wrappers/SideNavBarWrapper";
import PageWrapper from "../wrappers/PageWrapper";
import ContentWrapper from "../wrappers/ContentWrapper";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Email from "../svgs/FormSvgs";
import { useState } from "react";
import { userSignupFunc } from "utils/functions";
import {
  validEmail,
  validUsername,
  validPassword,
  validName,
} from "utils/inputValidation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserFirstName } from "redux/reducers/UserSignupSlice";
import { useRouter } from "next/router";
import Navbar from "../layouts/Navbar";
import Link from "next/link";

// type Inputs = {
//     firstName: string,
//     lastName : string,
//     email: string,
//     password: string,
//     username : string
//   };

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

  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [username, setUsername] = useState("")

  // const [firstNameErr, setFirstNameErr] = useState(false)
  // const [lastNameErr, setLastNameErr] = useState(false)
  // const [emailErr, setEmailErr] = useState(false)
  // const [passwordErr, setPasswordErr] = useState(false)
  // const [usernameErr, setUsernameErr] = useState(false)

  // const onChangeFirstName = (e ) => {
  //     setFirstName(e.target.value)
  //     setFirstNameErr(!validName(e.target.value))
  // }

  // const onChangeLastName = (e ) => {
  //     setLastName(e.target.value)
  //     setLastNameErr(!validName(e.target.value))
  // }

  // const onChangeEmail = (e ) => {
  //     setEmail(e.target.value)
  //     setEmailErr(!validEmail(e.target.value))
  // }

  // const onChangePassword = (e ) => {
  //     setPassword(e.target.value)
  //     setPasswordErr(!validName(e.target.value))
  // }

  // const onChangeUsername = (e ) => {
  //     setUsername(e.target.value)
  //     setUsernameErr(!validUsername(e.target.value))
  // }

  const dispatch = useDispatch();
  const route = useRouter()

  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log("clicked")

    await userSignupFunc("accounts/signup", userSignup)
      .then((res: any) => {
        e.preventDefault();

        console.log("response", res.data.data.email);
        console.log("reg data", userSignup.firstName);
        dispatch(setUserFirstName(userSignup.firstName));
        toast.success("sign up success");
        route.push('/login')
      })
      .catch((err: any) => {
        console.log("error", err.response.data.data.email);
      });
  };

  return (
    <>
      <PageWrapper>
        <Navbar />
        {/* <SideNavBarWrapper /> */}
        <ContentWrapper className="flex items-center">
          <div className="w-full h-fit flex flex-col items-center gap-5 justify-center">
            <h1>Sign up</h1>
            <form className="flex flex-col gap-5 w-2/5">
              <div className="flex relative items-center w-full">
                <Email classname="absolute left-5" fill="#ffffff" />
                <Input
                  className="w-full px-14"
                  placeholder="First Name"
                  name="firstName"
                  onChange={inputHandler}
                />
              </div>
              <div className="flex relative items-center w-full">
                <Email classname="absolute left-5" fill="#ffffff" />
                <Input
                  className="w-full px-14"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={inputHandler}
                />
              </div>

              <div className="flex relative items-center w-full">
                <Email classname="absolute left-5" fill="#ffffff" />
                <Input
                  className="w-full px-14"
                  placeholder="Email"
                  name="email"
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

              <div className="flex relative items-center w-full">
                <Email classname="absolute left-5" fill="#ffffff" />
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
