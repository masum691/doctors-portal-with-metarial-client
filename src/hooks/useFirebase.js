import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Home/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";



initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const auth = getAuth()

    const registerUser = (email, password,name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const newUser = {email, displayName: name}
                setUser(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                  }).catch((error) => {
                  });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const loginUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setError('')
        }).catch((error) => {
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
        signInUsingGoogle,
        error,
        logOut
    }
}
export default useFirebase;