import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "nasa.png",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}


const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: { tuits: tuits },

 reducers: {
    toggleLikedTuit(state, action) {
        const tuit = state.tuits.find((tuit) => tuit._id === action.payload._id);
        tuit.likes = tuit.liked ? tuit.likes - 1 : tuit.likes + 1;
        tuit.liked = !tuit.liked;
    },

    createTuit(state, action) {
        // unshift adds to the beginning of the array
        state.tuits.unshift({
            ...action.payload,
            ...templateTuit,
            _id: (new Date()).getTime(),
        })
    }, 

    deleteTuit(state, action) {
        const index = state.tuits.findIndex((tuit) => tuit._id === action.payload);
        state.tuits.splice(index, 1);
    }
 }
});

export const {toggleLikedTuit, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;