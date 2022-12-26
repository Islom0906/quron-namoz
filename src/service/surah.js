import axios from './api'

const SurahSerive={
  async getSurah(){
    const {data}= await axios.get()
    return data
  }
}
export default SurahSerive