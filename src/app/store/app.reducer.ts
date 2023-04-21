import { createReducer, on } from "@ngrx/store"
import { appInitState } from "./app.state"
import { decrementCounter, incrementCounter, setCounter } from "./app.action"

export const appReducer = createReducer(
    appInitState,
    on(incrementCounter, (state) => {
        state = {
            ...state,
            counter: state.counter + 1
        }
        
        return state
    }),
    on(decrementCounter, (state) => {
        state = {
            ...state,
            counter: state.counter -1
        }

        return state
    }),
    on(setCounter, (state, action) => {

        const { payload, type } = action

        state = {
            ...state,
            counter: payload
        }

        return state
    })
)