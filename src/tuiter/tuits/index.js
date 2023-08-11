
/* useEffect hook declares a function callback to be executed after the component is rendered. */

import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../services/tuits-thunks";
import "./index.css";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    // invoke findTuitsThunk to fetch tuits, put them into store so that we can extract them with useSelector
    useEffect(() => {
      dispatch(findTuitsThunk())
    }, [])

    //check if loading flag is true
    return(
        <ul className="list-group">
        {loading && 
          <li className = "list-group-item"> 
            Loading...
          </li>}
        {
          tuits.map(tuit =>
            <TuitItem key={tuit._id} tuit={tuit} />)
        }
      </ul>
    )
}

export default TuitsList;