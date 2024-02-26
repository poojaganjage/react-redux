const inputReducer = (state = '', action) => {
    switch(action.type) {
        case "UPDATE_DATA":
            return action.payload;
        case "default":
            throw new Error();
    }
    return state;
}
export default inputReducer;