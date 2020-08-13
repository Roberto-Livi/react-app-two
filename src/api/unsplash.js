import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 8dZhVv7_NzteNpW5gzFbJllAt0Y1VK0GL_ick4DJgGQ'
      }
})