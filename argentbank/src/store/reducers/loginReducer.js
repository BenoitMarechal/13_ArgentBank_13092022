import { createAction, createReducer } from '@reduxjs/toolkit'

export const userAction=createAction('/login/user', (string) =>({
    payload: {string}
}  ))


export const password=createAction('/login/password')

export const initialState={
    user: null,
    password:null

}

export default createReducer(initialState, (builder) =>

builder
.addCase(userAction, (state) =>{
    return state.user=userAction.payload
} )
)