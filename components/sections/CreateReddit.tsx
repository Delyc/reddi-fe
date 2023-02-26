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

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageWrapper>
        <Navbar />
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
                  {options.map((option: any, index: any) => (
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
