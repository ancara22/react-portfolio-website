import dataBase from "./data";

const initState = {
    dataBase: dataBase,
    showItemBox: false
}


const reducer = (state=initState, action) => {

    switch(action.type) {
        case "DATA_LOADED_SUCCESS":
            return state;

        case "SHOW_ITEM_BOX":
            return {
                ...state,
                showItemBox: true
            }
        case "CLOSE_ITEM_BOX":
            return {
                ...state,
                showItemBox: false
            }

        default:
            return state;
    }
}




export default reducer;