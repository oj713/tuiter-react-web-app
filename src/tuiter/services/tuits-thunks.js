import {createAsyncThunk } from '@reduxjs/toolkit';
import * as service from './tuits-service'; // import all exported functions as service

/* a thunk is a function that wraps an expression to delay its evaluation. */

/*
In previous assignments, reducers were used to keep track of the tuits, initialized from JSON files imported from within the reducers, but now we want to use data from the server instead. Previous implementations used reducer functions to update the state of the tuits array by adding new tuits to the state, deleting tuits, and modifying tuits in a redux store. Now we need to replace this implementation with the HTTP services we implemented in the Node.js server in the previous section. The reducers we've already implemented that create, delete, and update tuits, are all synchronous, manipulating data local to the React.js application, but we need to instead interact asynchronously with an HTTP server, while still maintaining a state with Redux. The Redux createAsyncThunk function can wrap an asynchronous HTTP function so that it can interact with a Redux reducer to store data from a remote server into a local redux store. In tuits-thunks.js, create the findTuitsThunk function that wraps the findTuits HTTP service function as shown below. We'll implement thunks for each service function in later sections.

Replace redux store with HTTP services. Redux reducers are synchronous, which means that they manipulate data local to the React.js application and can't interact with an HTTP server.
*/

// the await keyword is used to wait for the promise returned by axios.get to resolve

export const findTuitsThunk = createAsyncThunk(
    "tuits/findTuits", // action type
    async() => await service.findTuits() // service function, returned data goes in redux action's payload
)

export const deleteTuitThunk = createAsyncThunk(
    "tuits/deleteTuit",
    async(tuitid) => {
        await service.deleteTuit(tuitid)
        return tuitid
    }
)

export const createTuitThunk = createAsyncThunk(
    "tuits/createTuit",
    async(tuit) => {
        const newTuit = await service.createTuit(tuit)
        return newTuit
    }
)

export const updateTuitThunk = createAsyncThunk(
    "tuits/updateTuit",
    async(tuit) => {
        await service.updateTuit(tuit)
        return tuit
    }
)