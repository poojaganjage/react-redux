// export const anotherName = (name) => {
//     return {
//         type: "CHANGE_NAME", payload: name
//     }
// }

// export const anotherName = (name) => {
//     return((dispatch) => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res) => { return res.json()})
//         .then((result) => {
//            dispatch({type: "CHANGE_NAME", payload: result[0].name}); 
//         });
//     });
// }

export const anotherName = (name) => {
    return(async(dispatch) => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await data.json()
        dispatch({type: "CHANGE_NAME", payload: result[0].name}); 
    });
}

export const anotherWish = (wish) => {
    console.log(wish);
    return {
        type: "ADD_WISH", payload: wish
    }
}

export const anotherText = (input) => {
    return {
        type: "UPDATE_DATA", payload: input
    }
}

export const anotherFetchData = () => {
    return((dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {return response.json()})
        .then((result) => {
            dispatch({type: "GET_DATA", payload: [result[0].id, result[0].name]});
        });
    })
}

export const anotherSubmitData = (e, input) => {
    e.preventDefault();
    return {
        type: "SUBMIT_DATA", payload: input
    }
}