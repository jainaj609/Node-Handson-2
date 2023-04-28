import { createSlice } from "@reduxjs/toolkit";
export const CounterSlice = createSlice({
    name:'CounterAPP',
    initialState: {
        value:0
    },
    reducers: {
        Increment: (state)=>{
           state.value++;
        },
        Decrement: (state)=>{
            state.value--;
         },
    }

})
export const {Increment,Decrement} = CounterSlice.actions
export default CounterSlice.reducer