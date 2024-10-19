import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const CountSlice = createSlice({
    name:"Count",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            if(state.value>0){

                state.value -=1
            }
        },
        addpayload:(state,action)=>{
            state.value +=Number(action.payload)
        }
    }
})

export const {increment,decrement,addpayload}= CountSlice.actions

export default CountSlice.reducer