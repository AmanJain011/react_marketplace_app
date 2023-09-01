import { Button, message } from 'antd'
import Wrapper from './style'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [user, setUser] = useState({
        email: "", password: ""
    })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/auth/login", user)
        .then((res) => {
            message.success("User logged in successfully")
            localStorage.setItem("token", res.data.access_token)
            navigate("/")
        }).catch((err) => {
            message.error(err.response.data.message)
        }).finally(() => {
            setUser({
                email: "", password: ""
            })
        })
    }


    return (
        <Wrapper>
            <form onSubmit={handleSubmit} >
                <h1>SMP - <span className='heading'>Login</span></h1>
                <hr />
                <label htmlFor=""> Email
                    <input
                        type="email"
                        placeholder='Email'
                        value={user.email}
                        required
                        onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                    />
                </label>
                <label htmlFor=""> Password
                    <input
                        type="password"
                        placeholder='Password'
                        value={user.password}
                        required
                        onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                    />
                </label>
                <Button type='primary' htmlType='submit' >Login</Button>
                <span>
                    Don't have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </Wrapper>
    )
}

export default Login
