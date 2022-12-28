import {configureStore} from '@reduxjs/toolkit'
import SurahReduser from '../slice/surah'
import SurahDetailReduser from '../slice/surahDetail'
import SurahDetailTextReduser from '../slice/surahDetailText'

export default configureStore({
  reducer:{
    surah:SurahReduser,
    surahDetail:SurahDetailReduser,
    surahDetailText:SurahDetailTextReduser
  },
  devTools: process.env.NODE_ENV !== 'production',
})