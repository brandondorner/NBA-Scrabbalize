/* eslint-disable no-console */
import axios, { type AxiosError } from 'axios'

const axiosClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 5000
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
