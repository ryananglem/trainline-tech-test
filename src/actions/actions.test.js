import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from './index'
import * as t from './actionTypes'
import * as api from '../api'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

it("should create actions for successfully retrieving line data", () => {

    api.getLineData  = jest.fn()
                            .mockImplementation(() => 
                                    Promise.resolve({some: "data"}))
    const store  = mockStore()
    const expectedActions = [{    
                "data": [],
                "isLoading": true,
                "type": t.LINE_DATA_REQUEST,
              },
              {    
                "data": { some: "data"},
                "isLoading": false,
                "type": t.LINE_DATA_RECEIVED
              }
            ] 

    store.dispatch(actions.getData())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
})

it("should create actions for error retrieving line data", () => {

    api.getLineData  = jest.fn()
                            .mockImplementation(() => 
                                    Promise.reject("error"))
    const store  = mockStore()
    const expectedActions = [{    
                "data": [],
                "isLoading": true,
                "type": t.LINE_DATA_REQUEST,
              },
              {    
                "error": "error",
                "isLoading": false,
                "type": t.LINE_DATA_ERROR
              }
            ] 

    store.dispatch(actions.getData())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
})
