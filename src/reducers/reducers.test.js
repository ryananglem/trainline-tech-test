import reducers from './index'
import * as actions from '../actions'
import * as t from '../actions/actionTypes'

const initialState = {
    data: [],
    isLoading: false
};

it("should initiate data load request", () => {
    const action = {
        type: t.LINE_DATA_REQUEST,
        isLoading: true
    }
    const expected = {
        isLoading: true
    }
    const state = reducers(initialState, action )
    expect(state).toEqual(expected)
})

it("should receive data", () => {
    const action = {
        type: t.LINE_DATA_RECEIVED,
        data: { some: "data"},
        isLoading: false
    }
    const expected = {
        data: { some: "data"},
        isLoading: false
    }
    const state = reducers(initialState, action )
    expect(state).toEqual(expected)
})

it("should handle error", () => {
    const action = {
        type: t.LINE_DATA_ERROR,
        isLoading: false,
        error: "wrong!"
    }
    const expected = {
        isLoading: false,
        error: "wrong!"
    }
    const state = reducers(initialState, action )
    expect(state).toEqual(expected)
})