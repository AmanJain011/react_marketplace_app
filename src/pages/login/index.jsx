import { Link } from "react-router-dom"
import Wrapper from "./style"
import Button from "../../components/button"
import { useState } from "react"

const Login = () => {
  const [user, setUser] = useState({
    email: "", password: ""
  })

  return (
    <Wrapper>
      <form>
        <h1 className="heading">SMP - <span>Login</span></h1>
        <hr />

        <label htmlFor="">*Email
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => {setUser({...user, email: e.target.value})}}
          />
        </label>

        <label htmlFor="">*Password
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => {setUser({...user, password: e.target.value})}}
          />
        </label>

        <Button type='submit' value="Login" />
        <span>Don't have an account? <Link to='/register'>Register</Link></span>
      </form>
    </Wrapper>
  )
}

export default Login
