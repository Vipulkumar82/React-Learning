import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})


// Steps 

// Create store 
// wrap app component under Provider
// register reduucer in store
