import axios from "axios";
// const baseurl = import.meta.env.VITE_REACT_APP_BASE_API_URL;

export async function userSignupFunc(endpoint: string, body: any) {
    let response = await axios.post(`http://localhost:5000/api/v1/${endpoint}`, body);
    return response;

}


export async function userLoginFunc(endpoint: string, body: any) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/${endpoint}`,
    body
  );
  return response;
}


export async function addSubRedditFunc(endpoint: string, body: any, headers: any) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/${endpoint}`,
    body
  );
  return response;
}
