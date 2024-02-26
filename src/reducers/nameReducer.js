const nameReducer = (state = "Pooja", action) => {
    switch(action.type) {
        case "CHANGE_NAME":
            return action.payload;
        case "default":
            throw new Error();
    }
    return state;
}
export default nameReducer;