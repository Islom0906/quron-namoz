import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  isLoading: false,
  surah: [],
  error: null
}

export const surahSlice = createSlice({
  name: 'surah',
  initialState,
  reducers: {
    getSurahStart: (state) => {
      state.isLoading = true
    },
    getSurahSuccess: (state, { payload }) => {
      state.isLoading = false
      state.surah = payload
    },
    getSurahFailure: (state) => {
      state.isLoading = false
      state.error = 'Get surah error'
    }
  }
})

export const { getSurahFailure, getSurahStart, getSurahSuccess } = surahSlice.actions
export default surahSlice.reducer