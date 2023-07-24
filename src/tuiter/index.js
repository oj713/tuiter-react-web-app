import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import TuitSummaryList from "./tuit-summary-list";

function Tuiter() {
 return(
  <div>
   <Nav/>
   <div className = "row">
    <div className = "col-xl-2 col-lg-1 col-2 mb-2">
        <NavigationSidebar/>
    </div>
    <div className = "col-xl-7 col-lg-7 col-10 mb-2">
        <Routes>
            <Route path="/home" element={<HomeScreen/>}/>
            <Route path="/explore" element={<ExploreScreen/>}/>
            <Route path="/bookmarks" element={<BookmarksScreen/>}/>
            <Route path="/profile" element={<ProfileScreen/>}/>
        </Routes>
    </div>
    <div className = "d-lg-none col-2"></div>
    <div className = "col-xl-3 col-lg-4 col-10 mb-2">
        <WhoToFollowList/>
    </div>
   </div>
  </div>
 )
}
export default Tuiter