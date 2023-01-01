import {apiSurah} from './api'

const SurahSerive={
  async getSurah(){
    const {data}= await apiSurah.get()
    return data
  },
  async getSurahDetail(number,author){
    const {data}=await apiSurah.get(`/${number}/${author}`)
    return data
  },
  async getSurahText(number,lang){
    const {data}=await apiSurah.get(`/${number}/${lang}`)
    return data
  }
}
export default SurahSerive