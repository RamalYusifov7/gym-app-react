import axios from "axios";

export const youtubeApi = axios.create({
    baseURL: 'https://youtube-search-and-download.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_YOUTUBE_API,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
})

