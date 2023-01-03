import axios from "axios";


export const apiSurah=axios.create({
  baseURL:'https://api.alquran.cloud/v1/surah'
})
export const apiNamoz=axios.create({
  baseURL:'https://dailyprayer.abdulrcs.repl.co/api/tashkent'
})
