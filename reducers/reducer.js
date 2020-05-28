
// 1- Create initialState for the state
const initialState = {
    counter: 0
};

// 2 - Create a function, that will retrieve state and action as parameter
// You may initialize the state
const reducer = (state = initialState, action) => {

// 3) Reducer will contain all the actions (buttonPressed.. pageload, api call) -
// things that change your state

//4) You will change the state from reducer

    switch (action.type) {
        case 'INCREMENT':
            return {counter: state.counter+1}
        case 'DECREMENT':
            return {counter: state.counter-1}
        default:
            return state;
    }
}

export default reducer;
//5 Import reducer inside store.js