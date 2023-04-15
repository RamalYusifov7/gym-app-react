import axios from "axios";

export const globalApi = axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
})

