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
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormData = {
  // name: string;
  username: string;
  password: string;
};

const Login = () => {
  
  const schema = yup.object().shape({
    // name: yup.string().required(),
    username: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const userData = {
    username: "",
    password: "",
  };

  const [userLogin, setUserLogin] = useState(userData);
  const inputHandler = (e: any) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    console.log("data")
    // e.preventDefault();

    await userLoginFunc("accounts/login", userLogin)
      .then((res) => {
        // e.preventDefault();
         localStorage.setItem("user", JSON.stringify(userLogin));
         localStorage.setItem("token", res.data.data.token);
        // dispatch(setUserFirstName(userSignup.firstName));
        toast.success("sign up success");
        router.push("/createReddit")
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
            <form className="flex flex-col gap-5 w-2/5" onSubmit={handleSubmit(onSubmit)}>
      
              <div className="flex relative items-center w-full">
                <Email classname="absolute left-5" fill="#ffffff" />
                <Input
                  className="w-full px-14"
                  placeholder="User name"
                  name="username"
                  onChange={inputHandler}
                  ref={register("username")}
                />
                  {errors.username && <p>{errors.username.message}</p>}
              </div>

              <div className="flex relative items-center w-full">
                <Email classname="absolute left-5" fill="#ffffff" />
                <Input
                  className="w-full px-14"
                  placeholder="Password"
                  name="password"
                  onChange={inputHandler}
                  ref={register("password")}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>


              <Button type="submit" text="Login"  />
            </form>
          </div>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default Login;
function yupResolver(schema: yup.ObjectSchema<{ name: string; email: string; password: string; }, yup.AnyObject, { name: undefined; email: undefined; password: undefined; }, "">): import("react-hook-form").Resolver<FormData, any> | undefined {
  throw new Error("Function not implemented.");
}

