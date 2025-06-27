import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase.config';


const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log(user, loading)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const upDateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }


    const logOut = () => {
        return signOut(auth)

    }
    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)

        })
        return () => {
            unsubsribe()
        }
    }, [])


    const authData = {
        createUser,
        user,
        setUser,
        logIn,
        logOut,
        loading,
        setLoading,
        upDateUser,

    }
    return <AuthContext.Provider value={authData}>

        {children}

    </AuthContext.Provider>;
};

export default Authprovider;
