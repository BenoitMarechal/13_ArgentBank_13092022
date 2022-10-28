import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
        email: null,
        password:null,
        firstName: null,
        lastName:null, 
        token:null, 
        remember:false,
        connected:false      
  }
 

export const userSlice=createSlice(
    
    {
    name: "user", 
    initialState, 
    reducers:{
        setUserEmail:(state, action)=>{
            state.email=action.payload           
        },
        setUserPassword:(state, action)=>{
            state.password=action.payload           
        },
        setUserRemember:(state, action)=>{
            state.remember=action.payload           
        },
        setConnectedTrue:(state)=>{
            state.connected=true
        },
        setConnectedFalse:(state)=>{
            state.connected=false
        },
        toggleConnected:(state)=>{
            state.connected=!state.connected
        },
    }
})

export const {setUserEmail, setUserPassword, setUserRemember, setUserAll, setConnectedTrue, setConnectedFalse, toggleConnected}=userSlice.actions
export default userSlice.reducer