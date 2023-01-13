import { LOGIN, LOGOUT, SIGN_UP, CHECK_USER, ACTIVE_USER,REDIRECT } from "../type/Type";

const initialState = {
    isUserLoggedIn: false,
    userID: '',
    user: null,
}


function AuthReducer(state = initialState, action) {
    switch (action.type) {

        case LOGIN: {
            console.log(action.payload)
            return {
                ...state,
                isUserLoggedIn: true,
                userID: action.payload.userId,
                user:action.payload.userData
            };
        }
        case SIGN_UP: {
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload,
                userID: action.payload?.uid
            };
        }

        case LOGOUT: {
            return {
                ...state,
                isUserLoggedIn: false,
                user: null
            };
        }
        case ACTIVE_USER: {
            return {
                ...state,
                isUserLoggedIn: true,
                userID: action.payload
            }
        }

        case CHECK_USER: {
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload,
            };
        }
        case REDIRECT: {
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload,
            }
        }


        default:
            return state;
    }
}

export default AuthReducer;