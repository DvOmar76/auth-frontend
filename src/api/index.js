import axios from 'axios'
// import.meta.env.VITE_BACKEND_ORIGIN ||
const baseURL = 'http://127.0.0.1:8000/api'
const api = axios.create({
    withCredentials: true,
    withXSRFToken:true,
    defaultHeaders: {
        "X-Requested-With":"X-Requested-With"
    },
    headers: {
        Accept: 'application/json',
        credentials: 'include'
    },
    baseURL
})

export default api
