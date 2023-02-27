import PageWrapper from "../wrappers/PageWrapper";
import ContentWrapper from "../wrappers/ContentWrapper";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import getUserToken from "utils/getUserToken";
import { getRedditsOptionsFunc } from "utils/functions";
import { addRedditFunc } from "utils/functions";
import Navbar from "../layouts/Navbar";
import { useRouter } from "next/router";

const CreateReddit = () => {
  const [token, setToken] = useState("");
  const [err, setErr] = useState()
  const [options, setOptions] = useState<any>();
  const router = useRouter()

  useEffect(() => {
    return setToken(getUserToken());
  }, []);

  useEffect(() => {
    const getOpt = async () => {
      try {
        const res = await getRedditsOptionsFunc("reddits/options", {
          authorization: "Bearer " + token,
        });
        setOptions(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOpt();
  }, []);


  const createSub = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await addRedditFunc("reddits/sub", formData, {
        "Content-Type": "multipart/form-data",
        authorization: "Bearer " + token,
      });
      toast.success("Post added successfully!")
      router.push("/talents")
      console.log(res.data);

    } catch (error: any) {
      setErr(error.response.data.message)
      toast.error(`${error.response.data.message} Login again`)
      router.push("/login")
    }
  };

  return (
    <>
      <PageWrapper>
        <Navbar />
        <ContentWrapper className="flex items-center">
          <h1 className="text-2xl">Show your talent</h1>
          <div className="form-post w-2/5">
            {options ? (
              <form
                onSubmit={(e) => createSub(e)}
                encType="multipart/form-data"
                className="flex flex-col gap-3"
              >
                <select name="subreddit" required className="outline-none px-10 py-3 border border-primary-gray/20 rounded-md">
                  <option value="" hidden>
                    Select Category...
                  </option>
                  {options.map((option: any, index: any) => (
                    <option key={index} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                {/* <input
                  className="outline-none px-10 py-3 border border-primary-gray/20 rounded-md"
                  type="file"
                  name="image"
                  accept="image/*"
                /> */}
                <input
                  className="outline-none px-10 py-3 border border-primary-gray/20 rounded-md"
                  name="title"
                  placeholder="title"

                />

                <textarea
                  className="outline-none px-10 py-3 border border-primary-gray/20 rounded-md"
                  name="body"
                  required
                  placeholder="body"
                  rows={4}
                />
                <input className="py-3 px-10 rounded-sm bg-primary-orange text-white" type="submit" value="Submit" />
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
