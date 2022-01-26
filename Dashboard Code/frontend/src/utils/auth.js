import axios from 'axios';

const ACCESSTOKEN = 'accessToken';
const ROLE = 'role';
const NAME = 'name';
const EMAIL = 'email';

export const getAccessToken = () => {
    return sessionStorage.getItem(ACCESSTOKEN);
}

export const setAccessToken = (accessToken) => {
    sessionStorage.setItem(ACCESSTOKEN, accessToken);
}

export const getName = () => {
    return sessionStorage.getItem(NAME);
}

export const setName = (name) => {
    sessionStorage.setItem(NAME, name);
}

export const getRole = () => {
    return sessionStorage.getItem(ROLE);
}

export const setRole = (role) => {
    sessionStorage.setItem(ROLE, role);
}

export const getEmail = () => {
    return sessionStorage.getItem(EMAIL);
}

export const setEmail = (email) => {
    sessionStorage.setItem(EMAIL, email);
}

export const checkAccessToken = async () => {
    console.log('AUTH Checking Access Token');
    try {
        const accessToken = getAccessToken();
        const response = await axios.get('http://localhost:3333/user/access', {}, {
            headers: {
                'authorization': accessToken
            }
        });
        return response.data;
    } catch (error) {
        logout();
        throw new Error(error);
    }
}

export const logout = () => {
    sessionStorage.removeItem(ACCESSTOKEN);
    sessionStorage.removeItem(NAME);
    sessionStorage.removeItem(ROLE);
    sessionStorage.removeItem(EMAIL);

}

export const register = async (data) => {
    const response = await axios.post('http://localhost:3333/register/create', data)
    const accessToken = response.data.accessToken;
    const name = response.data.name;
    const email = response.data.email;
    const role = response.data.role;
    // console.log('access token: ' + JSON.stringify(accessToken));
    setAccessToken(accessToken);
    setName(name);
    setEmail(email);
    setRole(role);
}

export const login = async (data) => {
    const response = await axios.post('http://localhost:3333/login/attempt', data)
    // console.log('login response', response.data);
    const accessToken = response.data.accessToken;
    const name = response.data.name;
    const email = response.data.email;
    const role = response.data.role;
    const success = response.data.success;
    // console.log('access token: ' + JSON.stringify(accessToken));
    setAccessToken(accessToken);
    setName(name);
    setEmail(email);
    setRole(role);

    return {role, success};
}

export const test = async (data) => {
    const accessToken = getAccessToken();
        const can = await axios.post(' http://localhost:3333/register/decode', { 
            data: 'helo'
        }, { headers: { 
                'authorization': accessToken
            }
        })
        console.log('access token: ' + accessToken);
        console.log('can', can);
}