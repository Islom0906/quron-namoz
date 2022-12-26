import {configureStore} from '@reduxjs/toolkit'
import SurahReduser from '../slice/surah'

export default configureStore({
  reducer:{
    surah:SurahReduser
  },
  devTools: process.env.NODE_ENV !== 'production',
})