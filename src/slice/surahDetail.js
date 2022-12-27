import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  surahDetail: [],
  error: null
}

export const SurahDetailSlice = createSlice({
  name: 'surahDetail',
  initialState,
  reducers: {
    getSurahDetailStart: (state) => {
      state.isLoading = true
    },
    getSurahDetailSuccess:(state,{payload})=>{
      state.isLoading=false
      state.surahDetail=payload
    },
    getSurahDetailFailure:(state)=>{
      state.isLoading=false
    }
  }
})
export const {getSurahDetailFailure,getSurahDetailSuccess,getSurahDetailStart} = SurahDetailSlice.actions
export default SurahDetailSlice.reducer