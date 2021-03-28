const denoUrl = 'http://localhost:8000/api'

const config = {
  apiUrl: {
    login: `${denoUrl}/login`,
    logout: `${denoUrl}/logout`,
    register: `${denoUrl}/register`,
    user: `${denoUrl}/user`
  }
}

export default config
