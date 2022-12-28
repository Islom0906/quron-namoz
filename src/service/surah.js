import axios from './api'

const SurahSerive={
  async getSurah(){
    const {data}= await axios.get()
    return data
  },
  async getSurahDetail(number,author){
    const {data}=await axios.get(`/${number}/${author}`)
    return data
  },
  async getSurahText(number,lang){
    const {data}=await axios.get(`/${number}/${lang}`)
    return data
  }
}
export default SurahSerive