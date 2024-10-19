import {configureStore} from '@reduxjs/toolkit'
import CountSliceReducer from '../features/CountSlice'


const store = configureStore({
    reducer:{
        Count:CountSliceReducer,

    }
})

export default store