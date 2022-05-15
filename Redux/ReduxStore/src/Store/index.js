import { createStore } from 'redux';


// state is the form of state from any other component where we've created state and all the functions and receiving that state in this components so we can gave access to all other components this state values WITHOUT creating separate state for each components  and we can provide initial state like we did here that counter : 0

// and action is the method though which we can dispatch (SEND) it to ours REDUCER to perform function

const reducerFn = (state = { counter : 0 }, action) => {


    if(action.type === "inc"){

        // we uses RETURN when we wanted to CHANGE and then UPDATE the value like here we are changing and UPDATING the counter

        return { counter: state.counter + 1 }

    }

    // make sure to use RETURN STATE in the end
    return state;

}

const store = createStore(reducerFn);

export default store;