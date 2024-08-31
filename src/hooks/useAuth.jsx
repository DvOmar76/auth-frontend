import { useNavigate } from 'react-router-dom'
import { route } from '@/routes/index.jsx'
import api from "@/api/index.js";

export function useAuth() {
    const navigate = useNavigate()

    async function register(data) {
        return api.post('auth/register', data)
            .then(() => {
                navigate(route('vehicles.index'))
            })
            .catch(() => {})
    }

    return { register }
}