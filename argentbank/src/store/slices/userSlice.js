import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        email: null,
        password:null,
        firstName: null,
        lastName:null, 
        token:null, 
        remember:false
    }
   
  }

export const userSlice=createSlice({
    name: "user", 
    initialState, 
    reducers:{
        setUserEmail:(state, action)=>{
            state.user.email=action.payload           
        },
        setUserPassword:(state, action)=>{
            state.user.password=action.payload           
        },
        setUserRemember:(state, action)=>{
            state.user.remember=action.payload           
        },
        setUserAll:(state)=>{
            state.user.email=state.login.email
            state.user.password=state.login.password
            state.user.remember=state.login.remember
        }
    }
})

export const {setUserEmail, setUserPassword, setUserRemember, setUserAll}=userSlice.actions
export default userSlice.reducer