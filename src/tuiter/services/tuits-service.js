import axios from 'axios';
const API_BASE = process.env.REACT_APP_SERVER_API_URL;
const TUITS_API = `${API_BASE}/tuits`;

// async = asynchronous
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data
}

export const findTuits = async () => {
    // send HTTP GET request to TUITS_API
    const response = await axios.get(TUITS_API)
    const tuits = response.data // extract JSON array from response from server
    return tuits
}

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    console.log(response.data)
    console.log("tid: ", tid)
    return response.data
}

export const updateTuit = async (tuit) => {
    const response =await axios.put(`${TUITS_API}/${tuit._id}`, tuit)
    return tuit;
}