import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import editReducer from './slices/editSlice'


export default configureStore({
    reducer: {
         userReducer,       
         editReducer
          
    },
    
})



 