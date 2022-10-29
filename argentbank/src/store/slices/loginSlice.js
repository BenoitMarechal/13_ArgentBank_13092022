import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   
        email: "",
        password:"",
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
        },
        resetLogin:()=>{
             return initialState
        },
        setRememberFalse:(state)=>{
            state.remember=false
        }
    } 
})

export const {setEmail, setPassword, toggleRemember, resetLogin, setRememberFalse}=loginSlice.actions
export default loginSlice.reducer