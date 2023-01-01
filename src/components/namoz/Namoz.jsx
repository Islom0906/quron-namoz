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
  const [width, setWidth] = useState(0)
  const [liveClock, setLiveClock] = useState('')
  const { times } = useSelector(state => state.namoz)
  const dispatch = useDispatch()

  const getNamoz = async () => {
    dispatch(getNamozStart())
    try {
      const { times } = await NamozService.getNamoz()
      dispatch(getNamozSuccess(times))
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

  const widthHandler=()=>{
    let hour=moment().format('LT')
    let splitHour=hour.split(':')
    let hourChangeMinut=splitHour[0]*60+Number(splitHour[1])
    console.log(hourChangeMinut);
    setWidth(0.069*hourChangeMinut)
  }

  useEffect(() => {
    getNamoz()
    widthHandler()

    setInterval(() => {
      setLiveClock(moment().format('LTS'))
    }, 1000);
    setInterval(widthHandler, 60000);
  }, [])
  useEffect(() => {
    renderTime()
  }, [times])


  return (
    <div className="w-full h-full flex flex-col items-center space-y-10" >
      <h1 className="text-primary  text-3xl">Shom</h1>
      


      <span className="text-black font-bold text-5xl">{liveClock}</span>
      <p className="text-primary  text-3xl">Tashkent</p>
      <div className="relative w-full h-2 border-primary border rounded-full ">
        <div className="  h-full  bg-primary rounded-full" style={{width:`${width}%`}}></div>
        <div className="absolute -top-3 w-full z-10 ">
          {
            timeNamoz.map(time => (
              <div className="absolute top-0 left-[33%] flex flex-col items-center space-y-5 bg-bg">
                <div className="border-primary border w-8 h-8 rounded-full flex items-center justify-center">
                  <i class={`${time.icon} text-primary`}></i>
                </div>
                <span className="text-primary  text-xl">{time.time}</span>
              </div>
            ))
          }


        </div>
      </div>

    
    </div>
  )
}

export default Namoz
