import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seletedAudio, setIsPlaying, setAudioId } from "../../slice/surahDetail";

const AudioPlayer = ({ audio, isAudio, setIsAudio }) => {
  const [audioTime, setAudioTime] = useState({});
  const { isPlaying, surahDetail, audioId } = useSelector(state => state.surahDetail)
  const dispatch = useDispatch()
  const audioElem = useRef();
  const clickRef = useRef();


  const PlayPause = () => {
    // dispatch(seletedAudio(audios[ind]?.audio))
    dispatch(setIsPlaying(!isPlaying))
    console.log(audioElem.current.paused);
  };


  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setAudioTime((prewState) => ({ ...prewState, progress: (ct / duration) * 100, length: duration, }));
    if (audioElem.current.ended) {
      setAudioTime((prewState) => ({ ...prewState, progress: 0 }));
      if (surahDetail.length - 1 >= audioId) {
        dispatch(seletedAudio(surahDetail[audioId]?.audio))
      } else {
        dispatch(setIsPlaying(false))
        dispatch(seletedAudio(''))
      }
      if (surahDetail.length > audioId) {
        dispatch(setAudioId(audioId + 1))
      }
    }

  };
  const checkWidth = (e) => {
    const width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divProgress = (offset / width) * 100;
    audioElem.current.currentTime = (divProgress / 100) * audioTime.length;
  };

  const closeAudio = () => {
    setIsAudio(false)
    setIsPlaying(false);
  }

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioElem.current.play();

  }, [audio])


  return (
    <div className="fixed sm:pl-20 pl-4 top-16 w-full z-10 bg-primary h-14 pr-4 ">
      <audio src={audio} ref={audioElem} onTimeUpdate={onPlaying}></audio>
      <div className="flex items-center py-2 space-x-2 ">
        <div className="flex  items-center mt-2">
          <button onClick={PlayPause}>
            {isPlaying ? (
              <i class="ri-pause-mini-fill ri-xl text-white"></i>
            ) : (
              <i class="ri-play-mini-fill ri-xl text-white"></i>
            )}
          </button>
        </div>
        <div
          className="w-full bg-bg h-2 rounded-full"
          onClick={checkWidth}
          ref={clickRef}
        >
          <div
            className="w-0 h-full bg-icon  rounded-full "
            style={{ width: `${audioTime.progress}%` }}
          ></div>
        </div>
        <i class="ri-close-line ri-xl text-white cursor-pointer" onClick={closeAudio}></i>
      </div>
    </div>
  );
};

export default AudioPlayer;
