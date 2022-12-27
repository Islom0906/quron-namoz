import {configureStore} from '@reduxjs/toolkit'
import SurahReduser from '../slice/surah'
import SurahDetailReduser from '../slice/surahDetail'

export default configureStore({
  reducer:{
    surah:SurahReduser,
    surahDetail:SurahDetailReduser
  },
  devTools: process.env.NODE_ENV !== 'production',
})