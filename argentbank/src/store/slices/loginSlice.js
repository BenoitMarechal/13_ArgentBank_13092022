import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   
        email: null,
        password:null,
        remember: false,        
    
   
  }

export const loginSlice=createSlice({
    name: "login", 
    initialState, 
    reducers:{
        setEmail:(state, action)=>{
            state.email=action.payload
        },
        setPassword:(state, action)=>{
            state.password=action.payload
        },
        toggleRemember:(state)=>{
            state.remember=!state.remember
        }
    }
})

export const {setEmail, setPassword, toggleRemember}=loginSlice.actions
export default loginSlice.reducer