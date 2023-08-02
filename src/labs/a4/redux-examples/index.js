import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import todos from "./reducers/todos-reducer";
// The Provider delivers the content of the store to all its child components. This is done by invoking all the methods declared in useSelector hooks in the components.
import {Provider} from "react-redux";
import hello from "./reducers/hello";
import {configureStore} from "@reduxjs/toolkit";
import Todos from "./todos-component";
//combine all reducers into a single store
const store = configureStore({reducer: {hello, todos}});

const ReduxExamples = () => {
 return(
   <Provider store={store}>
     <div>
       <h2>Redux Examples</h2>
       <Todos/>
       <HelloReduxExampleComponent/>
     </div>
   </Provider>
 );
};
export default ReduxExamples;

