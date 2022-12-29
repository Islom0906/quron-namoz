import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  surahDetail: [],
  audio:"",
  audioId:"",
  author:'ar.alafasy',
  isPlaying:false,
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
    },
    setIsPlaying:(state,{payload})=>{
      state.isPlaying=payload
    },
    setAudioId:(state,{payload})=>{
      state.audioId=payload
    }
  }
})
export const {getSurahDetailFailure,getSurahDetailSuccess,getSurahDetailStart,seletedAudio,selectedAuthor,setIsPlaying,setAudioId} = SurahDetailSlice.actions
export default SurahDetailSlice.reducer