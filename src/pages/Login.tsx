import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router'

import config from '../config'

const Login = (props: {name: string, setName: (name: string) => void}) => {
  const { name, setName } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const submitForm = async (e: SyntheticEvent) => {
    e.preventDefault()

    try {
      const response = await fetch(config.apiUrl.login, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
          email: email,
          password: password
        })
      })

      const content = await response.json()
      console.log('----------Login content', content)
      setName(content.name)
      setRedirect(true)
    } catch (error) {
      console.log('----------Login form error', error)
      return null
    }
  }

  console.log('----------Login redirect', redirect)
  if (name && redirect) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <input type="email" className="form-control" placeholder="Enter your email address..." required
          onChange={e => setEmail(e.target.value)}
        />
        <input type="password" className="form-control" placeholder="Enter your password..." required
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
