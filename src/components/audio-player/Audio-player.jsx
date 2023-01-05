import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seletedAudio, setIsPlaying, setAudioId } from "../../slice/surahDetail";

const AudioPlayer = ({ audios, ind, }) => {

  const [id, setId] = useState('')
  const { audio, isPlaying, audioId } = useSelector(state => state.surahDetail)
  const dispatch = useDispatch()

  const PlayPause = () => {
    dispatch(seletedAudio(audios[ind]?.audio))
    dispatch(setIsPlaying(!isPlaying))
    dispatch(setAudioId(ind + 1))

  };

  return (
    <div>

      <div className="flex  items-center justify-center mt-5">
        <button onClick={PlayPause}>
          {(isPlaying && audioId === (ind + 1)) ? (
            <i className="ri-pause-mini-fill ri-3x text-primary"></i>
          ) : (
            <i className="ri-play-mini-fill ri-3x text-primary"></i>
          )}
        </button>
      </div>
    </div>
  )
};

export default AudioPlayer;
