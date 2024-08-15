"use client"
import axios from "axios";

// env
const TMDB_TOKEN = process.env.NEXT_PUBLIC_TMDB_TOKEN;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const defaultParams = {
    language: "en-US",
    include_adult: "true",
    include_video: "true",

 
};

export default async function fetcher(url: string, params? : Record<string,any>) {
  try {
    const options = {
      method: "GET",
      url: `${BASE_URL}${url}`,
      params: {...defaultParams,params},
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + TMDB_TOKEN,
      },
    };
    return await axios(options).then((data: any) => {
      return data;
    });
  } catch (error) {
    return error;
  }
}
