import { createSlice } from "@reduxjs/toolkit";

/*
a reducer is a function that receives the current state and an action object, and returns a new state.

Redux allows maintaining the state of an application. The state changes over time as the user interacts with the application. There are four basic ways we interact with data: create data, read data, update date, and delete data. We often refer to these operations by the acronym CRUD.

Notice that the todos-reducer.js declares an initial set of todo objects in a constant array. This will be the initial state of our simple todos application. We will then practice how to mutate the state in later lab exercises. All reducers must collate their collective states into a common store. To do this we will use configureStore to collate the various reducers into a single store as shown below.
*/

const initialTodos = [
 { _id: "123", do: "Accelerate the world's transition to sustainable energy", done: false },
 { _id: "234", do: "Reduce space transportation costs to become a spacefaring civilization", done: false },
];

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,

    /*
    define reducer functions as a map
    reducer functions receive current state
    mutate current state into new state, e.g.,
    pushing new object. _id set to current date
    do set to "do" object sent through action obj
    commonly referred to as the "payload"
    */

    reducers: {
        addTodo(state, action) {
        state.push({
            _id: (new Date()).getTime(),
            do: action.payload.do, done: false
        });
        },
        deleteTodo(state, action) {
            const index = action.payload.index
            state.splice(index, 1)
        },
        todoDoneToggle(state, action) {
            //find the todo by its ID, and then update its done field
            const todo = state.find((todo) => todo._id === action.payload._id)
            todo.done = !todo.done
        },
    } 
});

export const {addTodo, deleteTodo, todoDoneToggle} = todosSlice.actions //export actions so can call from UI
export default todosSlice.reducer