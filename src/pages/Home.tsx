import React from 'react'

const Home = (props: {name: string}) => {
  const { name } = props

  return (
    <div>
      {name ? `Hi ${name}` : 'You are not logged in.'}
    </div>
  )
}

export default Home
