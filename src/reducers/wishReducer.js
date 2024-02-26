const wishReducer = (state = ["eat", "code"], action) => {
    switch(action.type) {
        case "ADD_WISH":
            return [state.map((element) => {
                return element === "code" ? action.payload : element;
            })];
        case "default":
            throw new Error();
    }
    return state;
}
export default wishReducer;