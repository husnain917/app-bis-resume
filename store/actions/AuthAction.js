import { auth, db } from "../../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  arrayUnion,
  orderBy,
} from "firebase/firestore";
import { Magic } from "magic-sdk";
import {
  LOGIN,
  LOGOUT,
  SIGN_UP,
  CHECK_USER,
  ACTIVE_USER,
  REDIRECT,
  MODAL_OPEN,
} from "../type/Type";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { ToastSuccess, ToastError } from "../../src/components/Toast";
const fullAuth = getAuth();
import {
  storeToken,
  getToken,
  removeToken,
  userToken,
  getUserToken,
  removeUserToken,
} from "../../src/components/localStorage/LocalStorage";
export const doLogin = (data, setLoading, setErr) => async (dispatch) => {
  try {
    setLoading(true);
    const logInData = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const userLoginData = logInData.user;
    const dat = {
      email: userLoginData.reloadUserInfo["email"],
      family_name: userLoginData.reloadUserInfo["displayName"].split(" ")[1],
      given_name: userLoginData.reloadUserInfo["displayName"].split(" ")[0],
      granted_scopes:
        "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid",
      id: userLoginData.reloadUserInfo["localId"],
      locale: "en",
      name: userLoginData.reloadUserInfo["displayName"],
      picture:
        "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.eventfulnigeria.com%2Famo-team%2Faudu-maikori%2Favatar-png-free-download%2F&psig=AOvVaw3jK8tBrHXEDwBl_3IC_89q&ust=1674978240601000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjfk6zi6fwCFQAAAAAdAAAAABAE",
      verified_email: userLoginData.reloadUserInfo["emailVerified"],
    };
    if (userLoginData) {
      storeToken(userLoginData?.uid);
      userToken(dat);
      dispatch({
        type: LOGIN,
        payload: {
          userId: userLoginData?.uid,
          userData: dat,
        },
      });
      setErr({ fieldErr: "" });
      ToastSuccess("Login Successfull");
      dispatch({
        type: MODAL_OPEN,
        payload: false,
      });
    }
  } catch (e) {
    const errorCode = e.code;
    if (errorCode === "auth/wrong-password") {
      setErr({ fieldErr: "The password is not correct." });
    } else if (errorCode === "auth/user-not-found") {
      setErr({ fieldErr: "No account exists with this email." });
    }

    console.log("Error User LogIn", e.code);
  } finally {
    setLoading(false);
  }
};

export const doGoogleLogin =
  (terms, setLoading, setErr) => async (dispatch) => {
    const provider = new GoogleAuthProvider();

    try {
      setLoading(true);
      const userLoginData = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(userLoginData);
      const token = credential?.accessToken;
      const user = userLoginData.user;
      if (user) {
        storeToken(user?.uid);

        const details = getAdditionalUserInfo(userLoginData);
        userToken(details.profile);
        if (details.isNewUser) {
          let name = user.displayName.split(" ");

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
          payload: {
            userId: user?.uid,
            userData: details.profile,
          },
        });
        dispatch({
          type: MODAL_OPEN,
          payload: false,
        });
        setIsModalOpen(false);
        setErr({ fieldErr: "" });
        setLoading(false);
      }
      // console.log({ credential, token, user });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      if (errorCode === "auth/popup-closed-by-user") {
        setErr({ fieldErr: "Login Failed, Please try again." });
      }
      // console.log({ errorCode, errorMessage, email, credential });
    } finally {
      setLoading(false);
    }
  };

export const doSignUp =
  (data, setErr, setLoadingsignup, err) => async (dispatch) => {
    try {
      setLoadingsignup(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const userData = userCredential.user;

      updateProfile(fullAuth.currentUser, {
        displayName: data.firstName + " " + data.lastName, // it can be a value of an input
      });

      sendEmailVerification(fullAuth.currentUser);
      setLoadingsignup(false);

      ToastSuccess("Verification Email Sent.");
      const docRef = await addDoc(collection(db, "users"), {
        ...data,
        id: userData.uid,
      });

      // ToastSuccess("Verification Email Sent.");
      if (userData) {
        dispatch({
          type: SIGN_UP,
          payload: userData,
        });
      } else {
        // ToastError("This Email is already in use");
        ToastSuccess("Email Already Registered");
        setErr({ fieldErr: "This email already in use.", inputId: 12 });
      }
    } catch (e) {
      const errorCode = e.code;
      if (errorCode === "auth/email-already-in-use") {
        ToastError("Email Already Registered");
        setErr({ fieldErr: "This email already in use." });
      }
      console.log("Error at signup: ", errorCode);
      // if (errorCode === "auth/email-already-in-use") {
      //   dispatch({
      //     type: MODAL_OPEN,
      //     payload: true,
      //   });
      // } else {
      //   dispatch({
      //     type: MODAL_OPEN,
      //     payload: false,
      //   });
      // }
      if (err !== 12 && errorCode === "auth/email-already-in-use") {
        dispatch({
          type: MODAL_OPEN,
          payload: true,
        });
      } else {
        dispatch({
          type: MODAL_OPEN,
          payload: false,
        });
      }
    } finally {
      setLoadingsignup(false);
      // if (err !== 12) {
      //   dispatch({
      //     type: MODAL_OPEN,
      //     payload: true,
      //   });
      // } else {
      //   dispatch({
      //     type: MODAL_OPEN,
      //     payload: false,
      //   });
      // }
    }
  };

export const getLoggedInUser = () => async (dispatch) => {
  try {
    let uid;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        uid = user.uid;
        dispatch({
          type: ACTIVE_USER,
          payload: user,
        });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const doLogout = (setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    removeToken();
    removeUserToken();
    const res = await auth.signOut();
    dispatch({
      type: LOGOUT,
      payload: null,
    });
    console.clear();
  } catch (error) {
    console.log("error", error);
  } finally {
    setLoading(false);
  }
};

export const passwordReset =
  (setLoading, setErr, email) => async (dispatch) => {
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      const errorCode = err.code;
      if (errorCode === "auth/user-not-found") {
        setErr({ fieldErr: "No account exists with this email." });
      }
    } finally {
      setLoading(false);
    }
  };

export const doCheckUser = (uid) => async (dispatch) => {
  try {
    const id = uid;
    const userRef = collection(db, "users");
    // Create a query against the collection.
    const q = query(userRef, where("id", "==", id));
    var userData = {};
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      userData = doc.data();
    });
    // console.log('Check user at action: ', userData);
    //End UserData Code
    dispatch({
      type: CHECK_USER,
      payload: userData,
    });
  } catch (error) {
    console.log("error at Check user data", error);
  }
};
export const redirect = () => async (dispatch) => {
  if (getToken()) {
    console.log("redirect", getToken(), getUserToken());
    let user = getUserToken();
    dispatch({
      type: LOGIN,
      payload: {
        userId: getToken(),
        userData: user.user_token,
      },
    });
  }
};
export const modalOpen = () => async (dispatch) => {
  dispatch({
    type: MODAL_OPEN,
    payload: true,
  });
  console.log("smi");
};
export const modalClose = () => async (dispatch) => {
  dispatch({
    type: MODAL_OPEN,
    payload: false,
  });
};
export const loginMagicUser =
  (email, setUser, setLoading) => async (dispatch) => {
    let magic;
    if (typeof window !== "undefined") {
      magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY);
    }
    try {
      setLoading(true);
      const didToken = await magic.auth.loginWithMagicLink({ email });
      const user = await magic.user.getMetadata();

      if (user) {
        setUser(user);
        storeToken(user?.publicAddress);
        dispatch({
          type: LOGIN,
          payload: user?.publicAddress,
        });
        dispatch({
          type: MODAL_OPEN,
          payload: false,
        });
        ToastSuccess("Login Successfull");
      }
      return didToken;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
