import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seletedAudio, setIsPlaying, setAudioId } from "../../slice/surahDetail";

const AudioPlayer = ({ audios, ind, }) => {
  // const [audioTime, setAudioTime] = useState({});
  const [id, setId] = useState('')
  const { audio, isPlaying, audioId } = useSelector(state => state.surahDetail)
  const dispatch = useDispatch()
  // const audioElem = useRef();
  // const clickRef = useRef();
  const PlayPause = () => {
    dispatch(seletedAudio(audios[ind]?.audio))
    dispatch(setIsPlaying(!isPlaying))
    dispatch(setAudioId(ind+1))
    // setId(audios[ind]?.number)
  };
console.log(ind,audioId);
  // const onPlaying = () => {
  //   const duration = audioElem.current.duration;
  //   const ct = audioElem.current.currentTime;
  //   setAudioTime((prewState) => ({ ...prewState, progress: (ct / duration) * 100, length: duration, }));
  //   if (audioElem.current.ended) {
  //     setAudioTime((prewState) => ({ ...prewState, progress: 0 }));
  //     setIsPlaying(false)
  //     console.log('render');
  //   }

  // };
  // const checkWidth = (e) => {
  //   const width = clickRef.current.clientWidth;
  //   const offset = e.nativeEvent.offsetX;
  //   const divProgress = (offset / width) * 100;
  //   audioElem.current.currentTime = (divProgress / 100) * audioTime.length;
  // };

  // useEffect(() => {
  //   if (isPlaying) {
  //     audioElem.current.play();
  //   } else {
  //     audioElem.current.pause();
  //   }
  // }, [isPlaying]);

  // useEffect(() => {
  // if(audioTime.progress>0){
  //   setIsPlaying(false)
  // }
  // setAudioTime((prewState) => ({ ...prewState, progress: 0 }));
  // }, [audio])


  return (
    <div>
      {/* <audio src={audio} ref={audioElem} onTimeUpdate={onPlaying}></audio>
      <div
        className="w-full bg-bg h-2 rounded-full"
        onClick={checkWidth}
        ref={clickRef}
      >
        <div
          className="w-0 h-full bg-primary rounded-full "
          style={{ width: `${audioTime.progress}%` }}
        ></div>

      </div> */}
      <div className="flex  items-center justify-center mt-5">
        <button onClick={PlayPause}>
          {(isPlaying && audioId === (ind+1)) ? (
            <i class="ri-pause-mini-fill ri-3x text-primary"></i>
          ) : (
            <i class="ri-play-mini-fill ri-3x text-primary"></i>
          )}
        </button>
      </div>
    </div>
  )
};

export default AudioPlayer;
