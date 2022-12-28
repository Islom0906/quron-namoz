import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  surahDetail: [],
  audio:"",
  author:'ar.alafasy',
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
    },
    seletedAudio:(state,{payload})=>{
      state.audio=payload
    },
    selectedAuthor:(state,{payload})=>{
      state.author=payload
    }
  }
})
export const {getSurahDetailFailure,getSurahDetailSuccess,getSurahDetailStart,seletedAudio,selectedAuthor} = SurahDetailSlice.actions
export default SurahDetailSlice.reducer