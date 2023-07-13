const axios = require("axios")
const baseUrl = `https://bayut.p.rapidapi.com`

export const fetchApi = async (
  endpoint,
  params,
  key = process.env.NEXT_PUBLIC_RAPID_API_KEY
) => {
  const url = `${baseUrl}${endpoint}`

  const options = {
    method: "GET",
    url,
    params,
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  }

  try {
    const response = await axios.request(options)

    return response.data
  } catch (error) {
    console.error(error)
  }
}
