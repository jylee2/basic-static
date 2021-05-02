import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router'

import config from '../config'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const submitForm = async (e: SyntheticEvent) => {
    e.preventDefault()

    try {
      const response = await fetch(config.apiUrl.register, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      })

      const content = await response.json()
      console.log('----------Register content', content)
      setRedirect(true)
    } catch (error) {
      console.log('----------Register form error', error)
      return null
    }
  }

  console.log('----------Register redirect', redirect)
  if (redirect) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <h1 className="h3 mb-3 fw-normal">Register</h1>

        <input className="form-control" placeholder="Enter your name..." required
          onChange={e => setName(e.target.value)}
        />
        <input type="email" className="form-control" placeholder="Enter your email address..." required
          onChange={e => setEmail(e.target.value)}
        />
        <input type="password" className="form-control" placeholder="Enter your password..." required
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register
