import { createReducer, on } from "@ngrx/store"
import { decrementCounter, incrementCounter } from "./app.action"

export interface IAppState {
    counter: number
}

export const appInitState: IAppState = {
    counter: 0
}


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
    })
)