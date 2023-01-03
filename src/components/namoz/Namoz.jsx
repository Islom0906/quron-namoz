import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NamozService from "../../service/namoz";
import { getNamozFaliure, getNamozStart, getNamozSuccess } from '../../slice/namoz';
import timeIcon from './time-icon.json'
import moment from 'moment';
import 'moment/min/locales';
moment.locale('uz')


const Namoz = () => {
  const [timeNamoz, setTimeNamoz] = useState([])
  const [prayerChange, setPrayerChange] = useState([])
  const [liveClock, setLiveClock] = useState('')
  const { times } = useSelector(state => state.namoz)
  const dispatch = useDispatch()

  const getNamoz = async () => {
    dispatch(getNamozStart())
    try {
      const { today } = await NamozService.getNamoz()
      dispatch(getNamozSuccess(today))

    } catch (error) {
      dispatch(getNamozFaliure())
      console.log(error);
    }
  }
  const renderTime = () => {
    const newTimeArr = []
    timeIcon.forEach(time => {
      const timeName = time.timeName
      const timeHour = times[`${timeName}`]
      if (timeHour !== undefined) {
        time.time = timeHour
      }
      newTimeArr.push(time)
    })
    setTimeNamoz(newTimeArr)
  }

  const prayerTimeChangeMinut = () => {
    let collectionMinut = []
    for (let i = 0; i < timeNamoz.length; i++) {
      const prayerSplitHour = timeNamoz[i].time.split(':')
      const prayerMinutCalculation = prayerSplitHour[0] * 60 + Number(prayerSplitHour[1])
      collectionMinut.push(prayerMinutCalculation)
    }
    setPrayerChange(collectionMinut)
  }

  const prayerTimeIsActive = () => {
    let arr = []
    const hour = moment().format('LT')
    const splitHour = hour.split(':')
    const minutCalculation = splitHour[0] * 60 + Number(splitHour[1])

    for (let i = 0; i < timeNamoz.length; i++) {
      if (prayerChange[i] < minutCalculation && prayerChange[i + 1] > minutCalculation) {
        console.log('asdas');
        timeNamoz[i].isActive = true
      }else if ( minutCalculation>prayerChange[5] || minutCalculation<prayerChange[0] ) {
        console.log(minutCalculation);
        timeNamoz[5].isActive = true
      } 
      else {
          timeNamoz[i].isActive = false
      }
      

      arr.push(timeNamoz[i])
    }
    console.log(arr);
    setTimeNamoz(arr)
  }

  useEffect(() => {
    getNamoz()

    setInterval(() => {
      setLiveClock(moment().format('LTS'))
    }, 1000);
  }, [])




  useEffect(() => {
    prayerTimeChangeMinut()
    prayerTimeIsActive()
    renderTime()
  }, [times])


  return (
    <div className="w-full h-full space-y-10" >
      <div className='flex flex-col items-center space-y-10'>
        <h1 className="text-primary  text-3xl">Shom</h1>
        <span className="text-black font-bold text-5xl">{liveClock}</span>
        <p className="text-primary  text-3xl">Tashkent</p>
      </div>
      <div className='grid md:grid-cols-2 gap-5'>
        {
          timeNamoz.map(item => (
            <div className={`${item.isActive ? 'bg-primary' : 'bg-white'}  rounded-lg p-5 shadow-xl flex items-center justify-between`}>
              <span className={`font-bold text-xl  ${item.isActive ? 'text-white' : 'text-black'}`}>{item.time}</span>
              <p className={`font-bold text-xl ${item.isActive ? 'text-white' : 'text-black'} opacity-50`}>{item.timeNameUz}</p>

            </div>

          ))
        }
      </div>
    </div>
  )
}

export default Namoz
