import axios from "axios";


export const apiSurah=axios.create({
  baseURL:'https://api.alquran.cloud/v1/surah'
})
export const apiNamoz=axios.create({
  baseURL:'https://islomapi.uz/api/present/day?region=Toshkent'
})
