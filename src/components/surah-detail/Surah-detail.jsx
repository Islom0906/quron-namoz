import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AuthorAudio, SurahDetailCard } from "../";
import SurahSerive from "../../service/surah";
import { getSurahDetailFailure, getSurahDetailStart, getSurahDetailSuccess, selectedAuthor, seletedAudio, } from "../../slice/surahDetail";
import { getSurahDetailTextFailure, getSurahDetailTextStart, getSurahDetailTextSuccess, } from "../../slice/surahDetailText";
import authorJson from './author-audio.json'

const SurahDetail = () => {
  const { isLoading, surahDetail,author } = useSelector((state) => state.surahDetail);
  const { surahDetailText, languages } = useSelector((state) => state.surahDetailText);
  const { number } = useParams();
  const dispatch = useDispatch();

  const getSurahDetail = async () => {
    dispatch(getSurahDetailStart());
    try {
      const { data } = await SurahSerive.getSurahDetail(number,author);
      
      dispatch(getSurahDetailSuccess(data.ayahs));
    } catch (error) {
      dispatch(getSurahDetailFailure());
      console.log(error);
    }
  };
  const getSurahDetailText = async () => {
    dispatch(getSurahDetailTextStart());
    try {
      const { data } = await SurahSerive.getSurahText(number, languages);
      dispatch(getSurahDetailTextSuccess(data.ayahs));
    } catch (error) {
      dispatch(getSurahDetailTextFailure());
      console.log(error);
    }
  };

  const authorAudioHandler=(authorAudio)=>{
    dispatch(selectedAuthor(authorAudio))
  }

  useEffect(() => {
    getSurahDetail();
    getSurahDetailText();
  }, [author,languages]);

  useEffect(() => {
   dispatch(seletedAudio(''))
  }, [])
  
  




  return (
    <div >
    <div className="flex items-center space-x-10 mb-10 overflow-x-auto">
    {authorJson.map(item=>(
      <AuthorAudio author={item} authorAudio={authorAudioHandler}/>
    ))}
      
      
    </div>
      {surahDetailText.map((item, ind) => (
        <SurahDetailCard ayahs={item} ind={ind} audio={surahDetail} key={item.number} />
      ))}
    </div>
  );
};

export default SurahDetail;
