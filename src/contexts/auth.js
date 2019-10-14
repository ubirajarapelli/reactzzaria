import React, { createContext, useState, useCallback } from 'react'
import firebase from 'services/firebase'
import t from 'prop-types'

const AuthContext = createContext()

function AuthProvider ({ children }) {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: t.node.isRequired
}

export { AuthProvider, AuthContext }
