const fetchdata = {
    id: 1,
    load: "loading"
}

const fetchdataReducer = (state = fetchdata, action) => {
    switch(action.type) {
        case "GET_DATA":
            return {
                ...state, id: action.payload, load: action.payload
            }
        case "default":
            throw new Error();
    }
    return state;
}
export default fetchdataReducer;