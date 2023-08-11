import axios from 'axios';

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`

console.log("USERS_URL", USERS_URL)

const api = axios.create({ withCredentials: true})

export const login = async({username, password}) => {
    // we are using POST because we are sending data to the server
    const response = await api.post(`${USERS_URL}/login`, {username, password})
    const user = response.data
    return user
}

export const logout = async () => {
 const response = await api.post(`${USERS_URL}/logout`);
 return response.data; // when do we return data and when do we return response? we return data when we are using the service to get data from the server, and we return response when we are using the service to send data to the server. we return response.data here even though we posted data to the server because the server is sending us back data
};

export const profile = async () => {
 const response = await api.post(`${USERS_URL}/profile`);
 return response;
};

export const updateUser = async (user) => {
 const response = await api.put(`${USERS_URL}/${user.username}`, user);
 return response.data;
};

export const register = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/register`, { username, password })
    const user = response.data
    return user
}