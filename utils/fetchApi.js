
const axios = require('axios');

import { data } from "./data";



const baseUrl = `https://bayut.p.rapidapi.com`

export const fetchApi = async (endpoint, params) => {

    const url = `${baseUrl}${endpoint}`

    const options = {
        method: 'GET',
        url,
        params,
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };

    try {
        // const { data } = await axios.request(options);

        return data
    } catch (error) {
        console.error(error);
    }

}