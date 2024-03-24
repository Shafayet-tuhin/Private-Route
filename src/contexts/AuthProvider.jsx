import { createContext, useEffect, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)


const GoogleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


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

    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth , githubProvider)
    }

    
    const resetPassword = (email) => { 
        sendPasswordResetEmail(auth , email)
        .then((res) => {
             console.log(res)
        })
        .catch((err) => {
             console.log(err.message)
        })
    }

    // Effect hook to listen for authentication state changes
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
       signInWithGoogle,
       signInWithGithub,
       resetPassword
    }
    return (
        <AuthContext.Provider value={obj}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider