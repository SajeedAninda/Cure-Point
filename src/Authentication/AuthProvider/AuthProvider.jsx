import React, { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import { app } from '../firebase.config'
const auth = getAuth(app)

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null)
  let [loading, setLoading] = useState(true)

  let registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  let signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (name, userName) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      username: userName
    })
  }

  let logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('Current User', currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  let authInfo = {
    user,
    loading,
    registerUser,
    signIn,
    updateUserProfile,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
