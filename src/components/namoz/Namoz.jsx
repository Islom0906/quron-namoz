import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NamozService from "../../service/namoz";
import { getNamozFaliure, getNamozStart, getNamozSuccess } from '../../slice/namoz';
import timeIcon from './time-icon.json'
import { NamozTimeCard, NamozTimeCardSkeleton } from '../'
import moment from 'moment';
import 'moment/min/locales';
moment.locale('uz')



const Namoz = () => {
  const [liveCheck, setLiveCheck] = useState("")
  const [isLoading, setisLoading] = useState(false)
  const [timeNamoz, setTimeNamoz] = useState([])
  const [prayerName, setPrayerName] = useState("")
  const [liveClock, setLiveClock] = useState('')
  const { times } = useSelector(state => state.namoz)
  const dispatch = useDispatch()

  const getNamoz = async () => {
    dispatch(getNamozStart())
    try {
      const {times}= await NamozService.getNamoz()
      dispatch(getNamozSuccess(times))

    } catch (error) {
      dispatch(getNamozFaliure())
      console.log(error);
    }
  }

  useMemo(() => {
    const newTimeArr = []
    timeIcon.forEach(time => {
      const timeName = time.timeName
      const timeHour = times[`${timeName}`]
      if (timeHour !== undefined) {
        time.time = timeHour
      }
      newTimeArr.push(time)
    })
    let collectionMinut = []
    for (let i = 0; i < newTimeArr.length; i++) {
      const prayerSplitHour = newTimeArr[i].time.split(':')
      const prayerMinutCalculation = prayerSplitHour[0] * 60 + Number(prayerSplitHour[1])
      collectionMinut.push(prayerMinutCalculation)
    }

    const hour = moment().format('LT')
    const splitHour = hour.split(':')
    const minutCalculation = splitHour[0] * 60 + Number(splitHour[1])

    for (let i = 0; i < newTimeArr.length; i++) {
      if (collectionMinut[i] <= minutCalculation && collectionMinut[i + 1] > minutCalculation) {
        newTimeArr[i].isActive = true
        setPrayerName(newTimeArr[i].timeNameUz)
      } else if (collectionMinut[5] <= minutCalculation || collectionMinut[0] > minutCalculation) {
        newTimeArr[5].isActive = true
        setPrayerName(newTimeArr[5].timeNameUz)

      }
      else {
        newTimeArr[i].isActive = false
      }

    }
    // set state
    setTimeNamoz(newTimeArr)
    setisLoading(false)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [times,liveCheck])
 


  useEffect(() => {
    getNamoz()
    setInterval(() => {
      if (moment().format('ss') === '00') {
        setLiveCheck(moment().format('LT'))
      }
      setLiveClock(moment().format('LTS'))
    }, 1000);
    setisLoading(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])






  return (
    <div className="w-full h-full space-y-10" >
      <div className='flex flex-col items-center space-y-10'>
        {
          isLoading ? (<Skeleton width={200} height={40} />) :
            (<h1 className="text-primary  text-3xl">{prayerName}</h1>)
        }
        <span className="text-black font-bold text-5xl">{liveClock}</span>
        <p className="text-primary  text-3xl">Tashkent</p>
      </div>
      <div className='grid md:grid-cols-2 gap-5'>
        {
          isLoading ?
            <NamozTimeCardSkeleton cards={6} />
            :
            timeNamoz.map((item, index) => (
              <NamozTimeCard key={index} item={item} />
            ))
        }
      </div>
    </div>
  )
}

export default Namoz
