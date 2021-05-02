import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import config from '../src/config'

const App = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    (
      async () => {
        try {
          const response = await fetch(config.apiUrl.user, {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
          })

          const content = await response.json()
          console.log('----------Home content', content)
          setName(content.name)
        } catch (error) {
          console.log('----------Home user error', error)
          return null
        }
      }
    )()
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName} />
        <main className="form-signin">
            <Route path="/" exact component={() => <Home name={name} />} />
            <Route path="/login" component={() => <Login name={name} setName={setName} />} />
            <Route path="/register" component={Register} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App
