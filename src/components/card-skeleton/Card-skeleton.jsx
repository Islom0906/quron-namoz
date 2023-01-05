import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
const CardSkeleton = ({cards}) => {
  return (
    Array(cards).fill(0).map((_,ind)=>(
    <div key={ind} className="p-5 bg-white rounded-xl w-full  space-y-7 ">
      <div className="flex items-center justify-between w-full">
        <Skeleton circle width={40} height={40} />
        <Skeleton width={80} height={30}  style={{borderRadius:'40px'}}/>
      </div>
      <div className="context  space-y-2">
        <Skeleton  height={20} count={3} />
      </div>
    </div>
    ))
  )
}

export default CardSkeleton