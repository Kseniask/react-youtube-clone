import axios from 'axios'
const KEY = 'AIzaSyC_1uxGgRTcjhXAaM5HnWOCmvXRVbbWADI'

export default axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3',
  params: { part: 'snippet', type: 'video', maxResults: 5, key: KEY }
})
