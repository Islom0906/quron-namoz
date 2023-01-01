import {configureStore} from '@reduxjs/toolkit'
import SurahReduser from '../slice/surah'
import SurahDetailReduser from '../slice/surahDetail'
import SurahDetailTextReduser from '../slice/surahDetailText'
import NamozReducer from '../slice/namoz'

export default configureStore({
  reducer:{
    surah:SurahReduser,
    surahDetail:SurahDetailReduser,
    surahDetailText:SurahDetailTextReduser,
    namoz:NamozReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
})