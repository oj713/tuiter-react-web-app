import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../nav";
import {Routes, Route} from "react-router-dom";
function Labs() {
 return(
  <div>
   <Nav/>
    <Routes>
        <Route path= "a3" element={<Assignment3/>}></Route>
        <Route path = "a4" element = {<Assignment4/>}></Route>
    </Routes>
  </div>
 )
}
export default Labs;