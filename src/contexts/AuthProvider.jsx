import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)


const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null) ; 
    const [loading , setLoading] = useState(true) 
  
    const createUser = (email , password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth , email , password )   
    }

    const signInUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth) ; 
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth , GoogleProvider)
    }

    useEffect(()=>{
             const unSubscribe = onAuthStateChanged(auth , currUser =>{
             setUser(currUser)
             setLoading(false)
        })

        return () => {
              unSubscribe() ;
        }

    },[])

    const obj = {
       user,
       createUser,
       signInUser,
       logOut ,
       loading,
       signInWithGoogle
    }
    return (
        <AuthContext.Provider value={obj}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider