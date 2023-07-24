import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {HashRouter, Navigate} from "react-router-dom";
import {Routes, Route} from "react-router";

// HashRouter sets up base mechanism to navigate between multiple components
// Hashrouter requires a # symbol in the URL -- use BrowerRouter for cleaner URLs
// Routes defines the routes that will be available

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/"         element={<Navigate to ="/labs"/>}/>
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
