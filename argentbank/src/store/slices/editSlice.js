import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
        editOn: false,       
        newFirstName: null,
        newLastName:null, 
        // token:null, 
        // remember:false,
        // connected:false      
  }
 

export const editSlice=createSlice(
    
    {
    name: "edit", 
    initialState, 
    reducers:{
        toggleEdit:(state)=>{
            state.editOn=!state.editOn
        },
        setEditTrue:(state)=>{
            state.editOn=true
        },
        setEditFalse:(state)=>{
            state.editOn=false
        },
        setNewFirstName:(state, action)=>{
            state.newFirstName=action.payload
        },
        setNewLastName:(state, action)=>{
            state.newLastName=action.payload
        },       
    }
})

export const {toggleEdit,  setEditTrue, setEditFalse, setNewFirstName, setNewLastName}=editSlice.actions
export default editSlice.reducer