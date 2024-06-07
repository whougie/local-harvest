import { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie"
/* 3 parts:
  context === holds the shared data
  hook === used by any component that needs the shared data
  Provider === wrapper around all other compoonents who need the data
*/

const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext)

/* Whe a component calls useContext, it asks createContext for the contents of the Context we created. */

export default function AppProvider(props){

  const [ currentUser, setCurrentUser ] = useState()


  async function verfiyUser(){
    const foundCoookie =Cookie.get();
    if( foundCoookie ){
      const response = await fetch("/api/users/verify", {
      method: 'Post'
      })
      if (!response.ok) {
        return setCurrentUser(null)
      }
      const foundUser = await response.json()
      console.log(foundUser)
      setCurrentUser(foundUser)
    }
  }

    useEffect(() => {
    verfiyUser()
    },[])

  return(

    <AppContext.Provider value={{ currentUser }}>
      {props.children}
    </AppContext.Provider>
  )
}