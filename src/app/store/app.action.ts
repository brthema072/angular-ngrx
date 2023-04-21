import { createAction, props } from "@ngrx/store";

export const incrementCounter = createAction('[App] increment counter')
export const decrementCounter = createAction('[App] decrement counter')

export const setCounter = createAction('[App] set counter', props<{ payload: number }>())