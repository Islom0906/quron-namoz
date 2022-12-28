import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SurahDetailCard } from "../";
import SurahSerive from "../../service/surah";
import {
  getSurahDetailFailure,
  getSurahDetailStart,
  getSurahDetailSuccess,
} from "../../slice/surahDetail";
import {
  getSurahDetailTextFailure,
  getSurahDetailTextStart,
  getSurahDetailTextSuccess,
} from "../../slice/surahDetailText";

const SurahDetail = () => {
  const { isLoading, surahDetail } = useSelector((state) => state.surahDetail);
  const { surahDetailText, languages } = useSelector((state) => state.surahDetailText);
  const { number } = useParams();
  const dispatch = useDispatch();

  const getSurahDetail = async () => {
    dispatch(getSurahDetailStart());
    try {
      const { data } = await SurahSerive.getSurahDetail(number);
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


  useEffect(() => {
    getSurahDetail();
  }, []);

  useEffect(() => {
    getSurahDetailText();
  }, [languages])



  return (
    <div className="">
      Qorilar
      {surahDetail.map((item, ind) => (
        <SurahDetailCard ayahs={item} ind={ind} text={surahDetailText} key={item.number} />
      ))}
    </div>
  );
};

export default SurahDetail;
