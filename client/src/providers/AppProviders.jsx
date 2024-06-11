import { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie"

const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext)

export default function AppProvider(props){

  const [ currentUser, setCurrentUser ] = useState()

  //cookie stuff for user verification
  async function verfiyUser(){
    const foundCoookie =Cookie.get('auth-cookie');
    if( foundCoookie ){
      const response = await fetch("/api/users/verify", {
      method: 'Get'
      })
      if (!response.ok) {
        return setCurrentUser(null)
      }
      const foundUser = await response.json()
      setCurrentUser(foundUser)
    }
  }

    useEffect(() => {
    verfiyUser()
    },[])

  return(

    <AppContext.Provider value={{ currentUser, setCurrentUser}}>
      {props.children}
    </AppContext.Provider>
  )
}