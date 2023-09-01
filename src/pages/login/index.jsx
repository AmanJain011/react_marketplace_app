import { Button } from 'antd'
import Wrapper from './style'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        name: "", email: "", password: ""
    })

    const Login = (e) => {
        e.preventDefault()
        console.log(user)
        setUser({
            name: "", email: "", password: ""
        })
    }


    return (
        <Wrapper>
            <form onSubmit={Login} >
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
