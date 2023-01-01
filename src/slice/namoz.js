import { createSlice } from "@reduxjs/toolkit"

const initialState={
  isLoading:false,
  times:"",
  error:null
}

const NamozSlice=createSlice({
  name:"namoz",
  initialState,
  reducers:{
    getNamozStart:(state)=>{
      state.isLoading=true
    },
    getNamozSuccess:(state,{payload})=>{
      state.isLoading=false
      state.times=payload
    },
    getNamozFaliure:(state)=>{
      state.isLoading=false
      state.error='Error get namoz time'
    }
  }
})

export const {getNamozFaliure,getNamozStart,getNamozSuccess}=NamozSlice.actions
export default NamozSlice.reducer