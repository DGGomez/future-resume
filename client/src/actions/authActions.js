import axios from 'axios';

export const RegisterUser = (email,password,username,name,callback) => async(dispatch) =>{
    try{
        let { data } = await axios.post('/users/register', {email,password,username,name});
        storeAuthToken(data.token);
        dispatch({
            type: 'REGISTER',
            payload:{
                user: data.user,
                token: data.token
            }
        });
        callback();
    }
    catch(err) {
        console.log(err);
    }
};

export const loginUser = (email,password,callback) => async(dispatch) =>{
    try{
        let { data } = await axios.post('/users/login', {email,password});
        storeAuthToken(data.token);
        dispatch({
            type: 'LOGIN',
            payload:{
                user: data.user,
                token: data.token
            }
        });
        callback();
    }
    catch(err) {
        console.log(err);
    }
};

export const tokenLogin = () => async (dispatch) => {
    try {
        let token = await fetchAuthToken();
        if(token) {
            console.log('tokenLogin: ', token);
            let { data } = await axios({
                method: 'get',
                url: `/users/token-login`,
                headers: { 'Authorization': `Bearer ${token}` }
            });
            storeAuthToken(data.token);
            dispatch({
                type: 'TOKEN_LOGIN',
                payload: {
                    user: data.user,
                    token: data.token
                }
            });
        } else {
            console.log('no token');
        }
    } catch (error) {
        console.log('getUser error: ', error);
    }
};

export const logoutUser = (callback) => async (dispatch) => {
    try {
        await removeAuthToken();
        dispatch({
            type: 'LOGOUT_USER'
        });
        callback();
    } catch (error) {
        console.log('logoutUser error: ', error);
    }
};

const storeAuthToken = async (token) => {
    try {
        await localStorage.setItem('authToken', JSON.stringify(token));
    } catch (error) {
        console.log('storeAuthToken error', error);
    }
};

const fetchAuthToken = async () => {
    try {
        let token = await localStorage.getItem('authToken');
        return JSON.parse(token);
    } catch (error) {
        console.log('fetchAuthToken error: ', error);
    }
};

export const removeAuthToken = async () => {
    try {
        await localStorage.removeItem('authToken');
    } catch (error) {
        console.log('removeAuthToken error: ', error);
    }
};
