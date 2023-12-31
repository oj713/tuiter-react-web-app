import React from "react";
const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tesla.png"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-lg-10 col-9">
       <div>{tuit.userName} • {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.title}</div>
     </div>
     <div className="col-lg-2 col-3">
       <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
     </div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;