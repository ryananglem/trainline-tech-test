import * as types from '../actions/actionTypes'
import { getLineData } from '../api'

const requestLineData = () => ({
    type: types.LINE_DATA_REQUEST,
    isLoading: true,
    data: []
})

const receiveLineData = (data) => ({
    type: types.LINE_DATA_RECEIVED,
    isLoading: false,
    data
})

const lineDataError = (error) => ({
    type: types.LINE_DATA_ERROR,
    isLoading: false,
    error
})

export const getData = () => {
    return dispatch => {
        dispatch(requestLineData())
        return getLineData()
            .then (data => {
                dispatch(receiveLineData(data))
            })
            .catch( err =>
                dispatch(lineDataError(err)))
    }
}