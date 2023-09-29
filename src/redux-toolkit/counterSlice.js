import { createSlice } from '@reduxjs/toolkit' //next js redux toolkit  

export const counterSlice = createSlice({
     name:"counter",
     initialState:{
        value:0
     },
     reducers:{
        increase:state=>{
             state.value+=1
        },
        decrease:state=>{
             state.value -=1
        }
     }
})
export const {increase,decrease} = createSlice.actions
export default counterSlice.reducer