

import { auth, db } from '../../config/firebase';
import { collection, query, where, getDocs, doc, getDoc, addDoc, updateDoc, arrayUnion, orderBy } from "firebase/firestore";

import { LOGIN, LOGOUT, SIGN_UP, CHECK_USER, ACTIVE_USER } from '../type/Type'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo, sendPasswordResetEmail } from "firebase/auth";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { ToastSuccess } from '../../src/components/Toast';
const fullAuth = getAuth()
import { storeToken, getToken, removeToken } from '../../src/components/localStorage/LocalStorage';
export const doLogin = (data, setLoading, setErr, setIsModalOpen) => async (dispatch) => {
    try {
        setLoading(true);
        const logInData = await signInWithEmailAndPassword(auth, data.email, data.password);
        const userLoginData = logInData.user;
        // console.log('userLoginData: ', userLoginData);

        if (userLoginData) {
            storeToken(userLoginData?.uid)
            dispatch({
                type: LOGIN,
                payload: userLoginData?.uid,
            });
            setIsModalOpen(false)
            setErr({ fieldErr: '' })
            ToastSuccess("Login Successfull")
        }
    } catch (e) {
        const errorCode = e.code;
        if (errorCode === 'auth/wrong-password') {
            setErr({ fieldErr: 'The password is not correct.' })
        } else if (errorCode === 'auth/user-not-found') {
            setErr({ fieldErr: 'No account exists with this email.' })
        }

        console.log("Error User LogIn", e.code);
    } finally {
        setLoading(false);
    }
}

export const doGoogleLogin = (terms, setLoading, setErr, setIsModalOpen) => async (dispatch) => {
    const provider = new GoogleAuthProvider();

    try {
        setLoading(true)
        const userLoginData = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(userLoginData);
        const token = credential?.accessToken;
        const user = userLoginData.user;
        if (user) {
            storeToken(user?.uid)
            const details = getAdditionalUserInfo(userLoginData)
            if (details.isNewUser) {
                let name = user.displayName.split(' ')
                const docRef = await addDoc(collection(db, "users"), {
                    firstName: name[0],
                    lastName: name[1],
                    email: user.email,
                    terms: terms,
                    id: user.uid,
                });
            }

            dispatch({
                type: LOGIN,
                payload: user?.uid,
            });
            setIsModalOpen(false)
            setErr({ fieldErr: '' })
            setLoading(false)
        }
        // console.log({ credential, token, user });


    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        if (errorCode === 'auth/popup-closed-by-user') {
            setErr({ fieldErr: 'Login Failed, Please try again.' })
        }
        // console.log({ errorCode, errorMessage, email, credential });


    } finally {

        setLoading(false)
    }
}

export const doSignUp = (data, setErr, setIsModalOpen, setLoadingsignup) => async (dispatch) => {
    try {
        setLoadingsignup(true);
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const userData = userCredential.user;
        updateProfile(fullAuth.currentUser, {
            displayName: data.firstName, // it can be a value of an input
        });
        console.log("sami", userCredential)
        await sendEmailVerification(fullAuth.currentUser)
        ToastSuccess("Verification Email Sent.")
        const docRef = await addDoc(collection(db, "users"), {
            ...data,
            id: userData.uid,

        });
        if (userData) {
            dispatch({
                type: SIGN_UP,
                payload: userData,
            })
           
        }
    } catch (e) {
        const errorCode = e.code;
        if (errorCode === 'auth/email-already-in-use') {
            setErr({ fieldErr: 'This email already in use.' })
        }
        console.log('Error at signup: ', errorCode);
    } finally {
        setLoadingsignup(false);
        setIsModalOpen(false)
    }
}

export const getLoggedInUser = () => async (dispatch) => {
    try {
        let uid;
        onAuthStateChanged(auth, (user) => {
            if (user) {
                uid = user.uid;
                dispatch({
                    type: ACTIVE_USER,
                    payload: uid,
                })
            }
        });

    }
    catch (error) {
        console.log(error.message)
    }
}



export const doLogout = (setLoading) => async (dispatch) => {
    try {
        setLoading(true)
        removeToken()
        const res = await auth.signOut();
        dispatch({
            type: LOGOUT,
            payload: null
        });
    } catch (error) {
        console.log("error", error);
    } finally {
        setLoading(false)
    }
};


export const passwordReset = (setLoading, setErr, email) => async (dispatch) => {
    try {
        setLoading(true)
        await sendPasswordResetEmail(auth, email)
    } catch (err) {
        const errorCode = err.code;
        if (errorCode === 'auth/user-not-found') {
            setErr({ fieldErr: 'No account exists with this email.' })
        }

    } finally {
        setLoading(false)
    }

}


export const doCheckUser = (uid) => async (dispatch) => {
    try {
        const id = uid;
        const userRef = collection(db, "users");
        // Create a query against the collection.
        const q = query(userRef, where("id", "==", id));
        var userData = {}
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            userData = doc.data()
        });
        // console.log('Check user at action: ', userData);
        //End UserData Code
        dispatch({
            type: CHECK_USER,
            payload: userData
        });
    } catch (error) {
        console.log("error at Check user data", error);
    }
};