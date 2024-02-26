const data = "";

const submitdataReducer = (state = data, action) => {
    switch(action.type) {
        case "SUBMIT_DATA":
            return action.payload;
        case "default":
            throw new Error();
    }
    return state;
}

export default submitdataReducer;