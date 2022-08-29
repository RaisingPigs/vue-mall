import {v4 as uuidv4} from 'uuid';

export const getUUID = () => {
    let token = localStorage.getItem('userTempId')
    if (!token) {
        /*生成uuid作为token*/
        token = uuidv4();
        // token = 'b87e6e11-48c4-4ad3-9c5b-940e182a6994';
        localStorage.setItem('userTempId', token);
    }

    return token;
}

export const setToken = (token) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const clearToken = ()=>{
    return localStorage.removeItem('token');
}
