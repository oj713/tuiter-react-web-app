import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import { Navigate } from "react-router-dom";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import WhoToFollowList from "./who-to-follow-list";

import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, 
    tuits: tuitsReducer,
    user: authReducer}});

function Tuiter() {
 return(
  <Provider store = {store}>
      <div>
       <Nav/>
       <div className = "row">
        <div className = "col-xl-2 col-lg-1 col-2 mb-2">
            <NavigationSidebar/>
        </div>
        <div className = "col-xl-7 col-lg-7 col-10 mb-2">
            <Routes>
                <Route path="/" element={<Navigate to ="home"/>}/>
                <Route path="/home" element={<HomeScreen/>}/>
                <Route path="/explore" element={<ExploreScreen/>}/>
                <Route path="/bookmarks" element={<BookmarksScreen/>}/>
                <Route path="/profile" element={<ProfileScreen/>}/>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="/register" element={<RegisterScreen/>}/>
            </Routes>
        </div>
        <div className = "d-lg-none col-2"></div>
        <div className = "col-xl-3 col-lg-4 col-10 mb-2">
            <WhoToFollowList/>
        </div>
       </div>
      </div>
  </Provider>
 )
}
export default Tuiter