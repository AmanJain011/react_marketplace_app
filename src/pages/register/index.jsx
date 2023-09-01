import { Button, message } from 'antd'
import Wrapper from './style'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [user, setUser] = useState({
        name: "", email: "", password: ""
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/auth/register", user)
            .then((res) => {
                message.success(res?.data?.message)
                navigate("/login")
            }).catch(({ response }) => {
                message.error(response?.data?.message)
            }).finally(() => {
                setUser({
                    name: "", email: "", password: ""
                })
            })
    }


    return (
        <Wrapper>
            <form onSubmit={handleSubmit} >
                <h1>SMP - <span className='heading'>REGISTER</span></h1>
                <hr />
                <label htmlFor=""> Name
                    <input
                        type="text"
                        placeholder='Name'
                        value={user.name}
                        required
                        onChange={(e) => { setUser({ ...user, name: e.target.value }) }}
                    />
                </label>
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
                <Button type='primary' htmlType='submit' >Register</Button>
                <span>
                    Already have an account? <Link to="/login">Login</Link>
                </span>
            </form>
        </Wrapper>
    )
}

export default Register
