import React from "react";
import { FiShare } from "react-icons/fi";
import {FaRegComment} from "react-icons/fa";
import {AiOutlineHeart, AiFillHeart, AiOutlineRetweet, AiFillDislike, AiOutlineDislike} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../services/tuits-thunks";

const TuitStats = (
    {tuit = {_id: 123,
        topic: "Space",
        userName: "SpaceX",
        title: "tuit title",
        time: "2h",
        image: "spacex.png",
        liked: false,
        disliked: true,
        replies: 37,
        retuits: 567,
        likes: 23344,
        dislikes: 12,
        handle: "@spacex",
        tuit: "tuit content"}}
) => {
    const dispatch = useDispatch();

    // A better implementation might be to let the server update the likes count since there can be thousands of users liking the same tuit. But since it's just us using the application, this implementation will do for now. The reducer updates the state replacing the old tuit with the updated one and the new state makes its way through the store, provider, selector and back into the user interface for rendering.
    const handleLikeToggle = (tuit) => {
        dispatch(updateTuitThunk({...tuit, 
            likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
            liked: !tuit.liked}));
    }
    const handleDislikeToggle = (tuit) => {
        dispatch(updateTuitThunk({...tuit,
            dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
            disliked: !tuit.disliked}));
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
            <li className="list-inline-item">
                <button className = "btn tuitbtn p-0" onClick = {() => handleDislikeToggle(tuit)}>
                    {tuit.disliked ? 
                    <AiFillDislike className = "icon text-danger"/> : 
                    <AiOutlineDislike className = "icon"/>}
                </button>
                {tuit.dislikes} 
            </li>
            <li className="list-inline-item"><FiShare className = "icon"/></li>
        </ul>
    )
}

export default TuitStats;