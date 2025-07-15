import React, { createContext } from 'react'

export const authDataContext = createContext()
function AuthContext({ children }) {
  let serverUrl = "http://localhost:8000";//now this server url is present across the entire react app

  let value = {
    serverUrl
  }
  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>

    </div>
  )
}

export default AuthContext
