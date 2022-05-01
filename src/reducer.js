
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT": return { count: state.count + 1 }
    }
}

export default reducer;