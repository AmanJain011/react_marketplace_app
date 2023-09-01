import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get("http://localhost:8000/users", {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("token")
      }
    }).then((res) => {
      console.log(res)
      setUser(res.data.user)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      <h1>Welcome, <span>{user?.name}</span> !</h1>
    </div>
  )
}

export default Home
