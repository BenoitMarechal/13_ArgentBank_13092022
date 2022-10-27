import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    password:null,
    remember: false
  }

export const userSlice=createSlice({
    name: "user", 
    initialState, 
    reducers:{
        setUser:(state, action)=>{
            state.user=action.payload
        },
        setPassword:(state, action)=>{
            state.password=action.payload
        },
        toggleRemember:(state)=>{
            state.remember=!state.remember
        }
    }
})

export const {setUser, setPassword, toggleRemember}=userSlice.actions
export default userSlice.reducer