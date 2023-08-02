import React from "react";
import { FiShare } from "react-icons/fi";
import {FaRegComment} from "react-icons/fa";
import {AiOutlineHeart, AiFillHeart, AiOutlineRetweet} from "react-icons/ai";
import {useDispatch} from "react-redux";
import { toggleLikedTuit } from "../reducers/tuits-reducer";

const TuitStats = (
    {tuit = {_id: 123,
        topic: "Space",
        userName: "SpaceX",
        title: "tuit title",
        time: "2h",
        image: "spacex.png",
        liked: false,
        replies: 37,
        retuits: 567,
        likes: 23344,
        handle: "@spacex",
        tuit: "tuit content"}}
) => {
    const dispatch = useDispatch();
    const handleLikeToggle = (tuit) => {
        dispatch(toggleLikedTuit(tuit));
    }
    return (
        <ul className="list-inline d-flex justify-content-between mt-3">
            <li className="list-inline-item"><FaRegComment className = "icon"/> {tuit.replies} </li>
            <li className="list-inline-item"><AiOutlineRetweet className = "icon"/> {tuit.retuits} </li>
            <li className="list-inline-item">
                <button className = "btn tuitbtn p-0" onClick = {() => handleLikeToggle(tuit)}>
                    {tuit.liked ? 
                    <AiFillHeart className = "icon text-danger"/> : 
                    <AiOutlineHeart className = "icon"/>}
                </button>
                {tuit.likes} 
            </li>
            <li className="list-inline-item"><FiShare className = "icon"/></li>
        </ul>
    )
}

export default TuitStats;