import React from "react";
import { MdVerified } from "react-icons/md";
import TuitStats from "./tuit-stats";
import {RxCross2} from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";

const TuitItem = (
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
    // styles for some tuits
    const maxProfileWidth = {
        "max-width": "60px"
    }

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
      dispatch(deleteTuit(id))
    }

    return(
        <li className="list-group-item">
        <div className="row">
          <div className="col text-center" style = {maxProfileWidth}>
            <img className="rounded-circle shadow" height={48} src={`/images/${tuit.image}`}/>
          </div>
          <div className="col">
            <div className = "float-end">
              <button className = "btn m-0 p-0 tuitbtn"
                      onClick = {() => deleteTuitHandler(tuit._id)}>
                <RxCross2 className = "icon"/>
              </button>
            </div>
            <div><b>{tuit.userName}</b>
                <MdVerified className = "text-primary icon"/>
                {tuit.handle} • {tuit.time}
            </div>
            <div>{tuit.tuit}</div>
            <TuitStats tuit = {tuit}/>
          </div>
        </div>
       </li>
    )
}

export default TuitItem;