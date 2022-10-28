import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login:{
        email: null,
        password:null,
        remember: false,
        
    },
    //remember: false,
   
  }

export const loginSlice=createSlice({
    name: "login", 
    initialState, 
    reducers:{
        setEmail:(state, action)=>{
            state.login.email=action.payload
        },
        setPassword:(state, action)=>{
            state.login.password=action.payload
        },
        toggleRemember:(state)=>{
           // state.remember=!state.remember
            state.login.remember=!state.login.remember
        }
    }
})

export const {setEmail, setPassword, toggleRemember}=loginSlice.actions
export default loginSlice.reducer