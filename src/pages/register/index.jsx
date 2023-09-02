import { Link } from "react-router-dom"
import Wrapper from "./style"
import Button from "../../components/button"
import { useState } from "react"

const Register = () => {
  const [user, setUser] = useState({
    name: "", email: "", password: ""
  })

  return (
    <Wrapper>
      <form>
        <h1 className="heading">SMP - <span>Register</span></h1>
        <hr />

        <label htmlFor="">*Name
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => {setUser({...user, name: e.target.value})}}
          />
        </label>

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

        <Button type='submit' value="Register" />
        <span>Already have an account? <Link to='/login'>Login</Link></span>
      </form>
    </Wrapper>
  )
}

export default Register
