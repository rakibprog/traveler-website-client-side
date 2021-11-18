import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,updateProfile} from "firebase/auth";

// initialize firebase 
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //register user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

       

        //log in user 
        const loginUser = (email,password,location,history) =>{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                    history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
        }
         //sign in with google
         const signInWithGoogle = (location, history) => {
            setIsLoading(true);
            signInWithPopup(auth, googleProvider)
            .then((result) => {
              // The signed-in user info.
              const destination = location?.state?.from || '/';
                    history.replace(destination);
              const user = result.user;
              setAuthError('');
            }).catch((error) => {
              // Handle Errors here.
              setAuthError(error.message);
             
            }).finally(() => setIsLoading(false));
         }
        // observe User state
        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                  setUser(user);
                } else {
                  setUser({});
                }
                setIsLoading(false)
              });
              return () =>  unsubscribe;
        },[]);
        //signOut
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setIsLoading(false));
    }


    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logOut,
        signInWithGoogle
    }
}
export default useFirebase;