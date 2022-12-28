import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  surahDetailText: [],
  error: null,
  languages:'uz.sodik'
}

export const SurahDetailTextSlice = createSlice({
  name: 'surahDetail',
  initialState,
  reducers: {
    getSurahDetailTextStart: (state) => {
      state.isLoading = true
    },
    getSurahDetailTextSuccess:(state,{payload})=>{
      state.isLoading=false
      state.surahDetailText=payload
    },
    getSurahDetailTextFailure:(state)=>{
      state.isLoading=false
    },
    selectedLanguage:(state,{payload})=>{
      state.languages=payload
    }
  }
})
export const {getSurahDetailTextStart,getSurahDetailTextSuccess,getSurahDetailTextFailure,selectedLanguage} = SurahDetailTextSlice.actions
export default SurahDetailTextSlice.reducer