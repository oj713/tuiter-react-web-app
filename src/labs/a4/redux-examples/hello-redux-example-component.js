import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    const message = useSelector((state) => state.hello.message);
    return(
      <h1>{message}</h1>
    );
};
   
/*
const HelloReduxExampleComponent = () => {
    // The component uses redux's useSelector hook to extract the message from the reducer. When the component loads, reducers pass their data in the function declared in useSelector.
    //  the parameter hello in (hello) => { … }, gets the object returned by the reducers, e.g., {message: 'Hello World'}, therefore, (hello) => hello.message returns 'Hello World', and that's the value const message is initialized with. 
    
    const message = useSelector((hello) => hello.message);
    return(<h3>{message}</h3>);
};
*/

export default HelloReduxExampleComponent;