const initialState = {
    CoinsListAPI: []
}

export const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_COINSLIST_API':
            return {
                ...state,
                CoinsListAPI: action.payload
            }

        default:
            return state;
    }
}