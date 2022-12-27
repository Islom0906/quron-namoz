import axios from './api'

const SurahSerive={
  async getSurah(){
    const {data}= await axios.get()
    return data
  },
  async getSurahDetail(number){
    const {data}=await axios.get(`/${number} /ar.alafasy`)
    return data
  }
}
export default SurahSerive