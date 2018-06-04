export default function(state = {}, action) {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        case 'REGISTER':
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        case 'TOKEN_LOGIN':
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        case 'ACTIVATE_USER':
            return {
                ...state,
                user: action.payload.user
            };
        case 'LOGOUT_USER':
            return state={};
        default:
            return state;
    }
};