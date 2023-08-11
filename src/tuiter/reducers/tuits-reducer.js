import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../services/tuits-thunks";
const initialState = {
    tuits: [],
    loading: false
}

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

/* the reducer updates the state by setting to the tuits from the server, passed as payload. The new state is stored in reducer's store, provided by provider, retrieved in TuitList with useSelector(). */
/* thunks have various states tracking their lifecycle while processing requests - pending, fulfilled, rejected:
1. pending - the request is in progress
2. fulfilled - the request completed successfully
3. rejected - the request failed 

we only need to handle the fulfilled state
*/ 

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState,
 extraReducers: {
    [updateTuitThunk.fulfilled]: (state, {payload}) => {
        state.loading = false
        const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
        state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload}
    },
    [createTuitThunk.fulfilled]: (state, {payload}) => {
        state.loading = false
        state.tuits.unshift(payload)
    },
    [deleteTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.tuits = state.tuits.filter(t => t._id !== payload)
    },
    [findTuitsThunk.pending]: (state) => {
        state.loading = true
        state.tuits = []
    },
    [findTuitsThunk.fulfilled]: (state, {payload}) => {
        state.loading = false
        state.tuits = payload
    }, 
    [findTuitsThunk.rejected]: (state, action) => {
        state.loading = false
        state.error = action.error
    }
 },
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