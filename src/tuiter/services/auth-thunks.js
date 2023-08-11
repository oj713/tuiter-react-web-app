import {createAsyncThunk } from '@reduxjs/toolkit'
import * as authService from './auth-service'

export const loginThunk = createAsyncThunk(
    'user/login',
    async(credentials) => {
        const user = await authService.login(credentials) // using login service
        return user
    }
)

export const profileThunk = createAsyncThunk(
    'user/profile',
    async() => {
        const response = await authService.profile() // why do we need the await keyword both in the thunk and the server? we need it in the thunk because we are using the thunk to get data from the server, and we need it in the server because we are using the server to get data from the database
        return response.data
    }
)
export const logoutThunk = createAsyncThunk(
 "auth/logout", 
 async () => {
    return await authService.logout();
})

export const updateUserThunk = createAsyncThunk(
 "user/updateUser", 
 async (user) => {
   await authService.updateUser(user);
   return user;
})

export const registerThunk = createAsyncThunk(
    'auth/register',
    async(credentials) => {
        const user = await authService.register(credentials)
        return user
    }
)
