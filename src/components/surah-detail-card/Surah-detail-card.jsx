import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AudioPlayer } from "../";
const SurahDetailCard = ({ ayahs, ind, audio }) => {
  const { number } = useParams()
  const { audioId } = useSelector(state => state.surahDetail)
  const ayahsCard = useRef()
  useEffect(() => {
    if (audioId === ind + 1) {
      window.scrollTo(0, ayahsCard?.current?.offsetTop - window.innerHeight + ayahsCard?.current?.clientHeight + 50)
    }
  }, [audioId])


  return (
    <div className="p-6 bg-white rounded-xl w-full space-y-10 mb-10" ref={ayahsCard}>
      <div className="flex items-center justify-between">
        <span className="text-primary font-bold text-xl">{number}:{ind + 1}</span>
      </div>
      <div className=" sm:w-4/5 mx-auto sm:space-y-10 space-y-5">
        <p className="font-bold sm:text-xl text-base text-center">{audio[ind]?.text}</p>
        <h1 className=" sm:text-xl text-base font-mono text-primary text-center ">
          {ayahs.text}
        </h1>
      </div>
      <AudioPlayer audios={audio} ind={ind} />
    </div>
  );
};

export default SurahDetailCard;
