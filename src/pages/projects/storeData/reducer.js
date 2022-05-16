import dataBase from "./data";

const initState = dataBase;


const reducer = (state=initState, action) => {

    switch(action.type) {
        case "DATA_LOADED_SUCCESS":
            return state;

        default:
            return state;
    }
}


export default reducer;