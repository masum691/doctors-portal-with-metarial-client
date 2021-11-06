import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Home/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";



initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const auth = getAuth()

    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, password)
            .then((userCredential) => {
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)
                // ...
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        })
        .finally(() => setIsLoading(false))
    }

    return {
        user,
        isLoading,
        registerUser,
        loginUser,
        error,
        logOut
    }
}
export default useFirebase;