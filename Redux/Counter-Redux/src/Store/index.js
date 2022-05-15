import { createStore } from 'redux';


// state is the form of state from any other component where we've created state and all the functions and receiving that state in this components so we can gave access to all other components this state values WITHOUT creating separate state for each components  and we can provide initial state like we did here that counter : 0

// and action is the method though which we can dispatch (SEND) it to ours REDUCER to perform function

const reducerFn = (state = { counter : 0 }, action) => {

// SINCE DISPATCH is used for send the information and DISPATCH takes and (ACTION TYPE) therefore we've write (action.type) here

// and in app.js we've used dispatch for increment and (ACTION TYPE) we used is (type : "inc") therefore we'use if condition according to it

    if(action.type === "inc"){

        // we uses RETURN when we wanted to CHANGE and then UPDATE the value like here we are changing and UPDATING the counter

        return { counter: state.counter + 1 }

    }

    else if(action.type === "dec"){

        return { counter: state.counter - 1 }

    }

    else if(action.type === "add"){

        return { counter: state.counter + action.payload }

    }

    // make sure to use RETURN STATE in the end
    return state;

}

const store = createStore(reducerFn);

export default store;