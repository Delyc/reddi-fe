import axios from "axios";
// const baseurl = import.meta.env.VITE_REACT_APP_BASE_API_URL;

export async function userSignupFunc(endpoint: string, body: any) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/${endpoint}`,
    body
  );
  return response;
}

export async function userLoginFunc(endpoint: string, body: any) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/${endpoint}`,
    body
  );
  return response;
}

export async function addSubRedditFunc(
  endpoint: string,
  body: any,
  headers: any
) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/${endpoint}`,
    body,
    {
      headers,
    }
  );
  return response;
}

export async function getRedditsOptionsFunc(
  endpoint: string,
  headers: any
) {
  let response = await axios.get(
    `http://localhost:5000/api/v1/${endpoint}`,
    {
      headers,
    }
  );
  return response;
}


export async function addRedditFunc(
  endpoint: string,
  body: any,
  headers: any
) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/${endpoint}`,
    body,
    {
      headers,
    }
  );
  return response;
}



export async function getAllRedditsFunc(
  endpoint: string,
) {
  let response = await axios.get(
    `http://localhost:5000/api/v1/${endpoint}`,
  );
  return response;
}


export async function getSubRedditsFunc(
  endpoint: string,
  headers: any
) {
  let response = await axios.get(
    `http://localhost:5000/api/v1/${endpoint}`,
    {
      headers,
    }
  );
  return response;
}


export async function getOneRedditFunc(
  endpoint: string,
) {
  let response = await axios.get(
    `http://localhost:5000/api/v1/${endpoint}`,
  );
  return response;
}

export async function commentFunc(
  endpoint: string,
  body: any,
  headers : any
) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/${endpoint}`, body, {
      headers,
    }
  );
  return response;
}