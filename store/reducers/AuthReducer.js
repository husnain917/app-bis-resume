import { LOGIN, LOGOUT, SIGN_UP , CHECK_USER, ACTIVE_USER } from "../type/Type";

const initialState = {
    isUserLoggedIn: false,
    userID: '',
    user: null,
}


function AuthReducer(state = initialState, action) {
    switch (action.type) {

        case LOGIN: {
            return {
                ...state,
                isUserLoggedIn: true,
                userID: action.payload
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


        default:
            return state;
    }
}

export default AuthReducer;