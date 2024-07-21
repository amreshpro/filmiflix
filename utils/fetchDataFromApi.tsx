import axios from "axios";


// env
const TMDB_TOKEN = process.env.NEXT_PUBLIC_TMDB_TOKEN;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function fetchDataFromApi(url:string, page = 1) {
    try {
        const options = {
            method: 'GET',
            url: `${BASE_URL}${url}`,
            params: {
                include_adult: 'true',
                include_video: 'true',
                language: 'en-US',
                page: `${page}`,
                sort_by: 'popularity.desc',
            },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + TMDB_TOKEN,
            },
        };
        return await axios(options).then((data:any) => {
            return data;
        });
    } catch (error) {
        console.log(error);
        return error
    }
}