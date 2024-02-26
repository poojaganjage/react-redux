const initialState = {
    name: "Pooja",
    wishes: ["eat", "code"]
}
const reducerdata = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_NAME":
            return {
                ...state, 
                name:action.payload
            }
        case "default":
            throw new Error();
    }
    return state;
}
export default reducerdata;