import React from "react";
import TuitSummaryList from "./tuit-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";

function ExploreScreen() {
 return (
    <>
    <div className = "row">
        <div className = "col-11 position-relative">
            <input placeholder = "Search Tuiter" className = "form-control ps-5 p-2 rounded-pill" />
            <AiOutlineSearch className = "fs-3 position-absolute wd-move-up"/>
        </div>
        <div className = "col-1">
            <GoGear className = "fs-3 float-end position-relative wd-top-8"/>
        </div>
    </div>

    <ul className = "nav nav-pills mb-2 mt-2">
        <li className = "nav-item">
            <a className = "nav-link active">For You</a>
        </li>
        <li className = "nav-item">
            <a className = "nav-link">Trending</a>
        </li>
        <li className = "nav-item">
            <a className = "nav-link">News</a>
        </li>
    </ul>
    
    <div className = "position-relative mb-2">
        <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" className="w-100"/>
        <h1 className = "position-absolute wd-move-up text-white">SpaceX's Starship</h1>
    </div>

    <TuitSummaryList/>
    </>
 )
}
export default ExploreScreen;