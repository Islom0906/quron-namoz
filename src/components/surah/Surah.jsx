import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SurahCard} from '../'
import SurahSerive from '../../service/surah'
import { getSurahFailure, getSurahStart, getSurahSuccess } from '../../slice/surah'

const Surah = () => {
  const {isLoading,surah} = useSelector(state=> state.surah)
  const dispatch =useDispatch()
  
  const getSurah=async ()=>{
    dispatch(getSurahStart())
    try {
      const {data} =await SurahSerive.getSurah()
      dispatch(getSurahSuccess(data))
    } catch (error) {
      dispatch(getSurahFailure())
      console.log(error);
    }
  }

   useEffect(() => {
    getSurah()
   }, [])
   

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-3">
      {
        surah.map(item=>(
          <SurahCard key={item.number} surah={item}/>
        ))
      }
    </div>
  )
}

export default Surah