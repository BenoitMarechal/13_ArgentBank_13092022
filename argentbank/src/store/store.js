import { configureStore } from '@reduxjs/toolkit'
//import loginReducer from './slices/loginSlice' 
import userReducer from './slices/userSlice'
export default configureStore({
    reducer: {
         userReducer       
    },
})



 