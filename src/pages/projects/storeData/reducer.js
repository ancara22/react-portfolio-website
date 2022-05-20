import dataBase from "./data";

const initState = {
    dataBase: dataBase,
    showItemBox: false,
    id: undefined
}


const reducer = (state=initState, action) => {

    switch(action.type) {
        case "DATA_LOADED_SUCCESS":
            return state;

        case "SHOW_ITEM_BOX":
            return {
                ...state,
                showItemBox: true,
                id: action.payload
            }
        case "CLOSE_ITEM_BOX":
            return {
                ...state,
                showItemBox: false,
                id: undefined
            }

        default:
            return state;
    }
}




export default reducer;