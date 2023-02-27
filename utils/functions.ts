import axios from "axios";

export async function userSignupFunc(endpoint: string, body: any) {
  let response = await axios.post(
    `https://reddi-be-production.up.railway.app/api/v1/${endpoint}`,
    body
  );
  return response;
}

export async function userLoginFunc(endpoint: string, body: any) {
  let response = await axios.post(
    `https://reddi-be-production.up.railway.app/api/v1/${endpoint}`,
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
    `https://reddi-be-production.up.railway.app/api/v1/${endpoint}`,
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
    `https://reddi-be-production.up.railway.app/api/v1/${endpoint}`,
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
    `https://reddi-be-production.up.railway.app/api/v1/${endpoint}`,
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
    `https://reddi-be-production.up.railway.app/api/v1/${endpoint}`,
  );
  return response;
}


export async function getSubRedditsFunc(
  endpoint: string,
  headers: any
) {
  let response = await axios.get(
    `https://reddi-be-production.up.railway.app/api/v1/${endpoint}`,
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
    `https://reddi-be-production.up.railway.app/api/v1/${endpoint}`,
  );
  return response;
}

export async function commentFunc(
  endpoint: string,
  body: any,
  headers : any
) {
  let response = await axios.post(
    `https://reddi-be-production.up.railway.app/api/v1/${endpoint}`, body, {
      headers,
    }
  );
  return response;
}


export async function likePostFunc(
  endpoint: string,
  headers: any

) {
  let response = await axios.post(
    `https://reddi-be-production.up.railway.app/api/v1/${endpoint}`, headers
  );
  return response;
}


export async function dislikePostFunc(
  endpoint: string,
  headers: any
) {
  let response = await axios.post(
    `https://reddi-be-production.up.railway.app/api/v1/${endpoint}`,{
      headers
    }
  );
  return response;
}

