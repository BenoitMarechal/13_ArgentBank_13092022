import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
        editOn: false,       
        // firstName: null,
        // lastName:null, 
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
        
        // setUserRemember:(state, action)=>{
        //     state.remember=action.payload           
        // },
        // setRemember:(state)=>{
        //     let target=document.getElementById('remember-me')
        //     if (target&&target.checked===true){
        //         state.remember=true
        //     }
        //     else{
        //         state.remember=false
        //     }
        // },


        
        // setConnectedFalse:(state)=>{
        //     state.connected=false
        // },
        // toggleConnected:(state)=>{
        //     state.connected=!state.connected
        // },
        // setToken:(state, action)=>{
        //     state.token=action.payload
        // },
        // setFirstName:(state, action)=>{
        //     state.firstName=action.payload
        // },
        // setLastName:(state, action)=>{
        //     state.lastName=action.payload
        // },
        // resetUser:()=>{
        //     return initialState
        // }
    }
})

export const {toggleEdit,  setEditTrue, setEditFalse}=editSlice.actions
export default editSlice.reducer