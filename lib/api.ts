const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const TMDB_TOKEN = process.env.NEXT_PUBLIC_TMDB_TOKEN
export async function fetchMovie(url = "/discover/movie") {
  const response = await fetch(`${BASE_URL}${url}`,{
    headers:{
        Authorization:`Bearer ${TMDB_TOKEN}`
    }
  });
  console.log(response)
  const movieData = await response.json();
  return movieData;
}
