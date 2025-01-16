import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null)
  let [loading, setLoading] = useState(true)

  authInfo = {
    user,
    loading
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
