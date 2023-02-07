/* eslint-disable no-console */
import axios, { type AxiosError } from 'axios'

// Since all of our api calls will be made to RapidAPI I feel comfortable
// setting our baseUrl to rapidApi here.
// Same with the API Keys
const axiosClient = axios.create({
  baseURL: 'https://free-nba.p.rapidapi.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
  }
})

// Handle errors
axiosClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.log(`Error: ${error.message}`)
    throw error
  }
)

export default axiosClient
