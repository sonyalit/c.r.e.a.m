import { setAlert } from "../context/alert"
import { setAuth, setUserName } from "../context/auth"
import api from "./axiosClient"

export class AuthClient {
    static async login(username: string, password: string) {
        try {
            const result = await api.post('/auth/login', {
                username, password
            })
            console.log(result)
            if (result.status === 200) {
                setAuth(true)
                setUserName(result.data.username)
                localStorage.setItem('auth', JSON.stringify(result.data))
                return true
            }
            return false
        } catch (e) {
            console.log(e)
        }
    }
    static async registration(username: string, password: string) {
        try {
            const result = await api.post('/auth/registration', {
                username, password
            })
            console.log(result)
            if (result.status === 201) {
                setAuth(false)
                localStorage.setItem('auth', JSON.stringify(result.data))
                return true
            }
            return false
        } catch (e) {
            console.log(e)
        }
    }
}