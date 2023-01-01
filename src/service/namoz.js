import {apiNamoz} from './api'

const NamozService={
  async getNamoz(){
    const {data}=await apiNamoz.get()
    return data
  }
}

export default NamozService