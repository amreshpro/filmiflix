"use client";
import axios from "axios";

// Environment Variables
const TMDB_TOKEN = process.env.NEXT_PUBLIC_TMDB_TOKEN;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Default parameters for API requests
const defaultParams = {
  language: "en-US",
  include_adult: "true",
  include_video: "true",
};

// Fetcher function to make API requests
export default async function fetcher(url: string, params?: Record<string, any>) {
  try {
    // Log the parameters for debugging
    console.log("Params sent to API:", { ...defaultParams, ...params });

    // Options for the axios request
    const options = {
      method: "GET",
      url: `${BASE_URL}${url}`,
      params: { ...defaultParams, ...params }, // Correct parameter merging
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + TMDB_TOKEN,
      },
    };

    // Make the request and return the response
    const response = await axios(options);
    return response.data;
  } catch (error) {
    // Log and re-throw the error for debugging
    console.error("Fetcher Error:", error);
    throw error;
  }
}
