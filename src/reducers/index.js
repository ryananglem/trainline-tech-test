
import * as types from '../actions/actionTypes'

const initialState = {
    data: [],
    isLoading: false
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
         case types.LINE_DATA_REQUEST:
            return { isLoading: action.isLoading }
         case types.LINE_DATA_RECEIVED:
            return { isLoading: action.isLoading, data: action.data }
         case types.LINE_DATA_ERROR:
            return { isLoading: action.isLoading, error: action.error}
        default:
            return state
    }
};
export default reducers