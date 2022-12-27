import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {SurahDetailCard} from "../";
import SurahSerive from "../../service/surah";
import { getSurahDetailFailure, getSurahDetailStart, getSurahDetailSuccess } from "../../slice/surahDetail";

const SurahDetail = () => {
  const { isLoading, surahDetail } = useSelector((state) => state.surahDetail);
  const {number}=useParams()

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

  useEffect(() => {
    getSurahDetail();
  }, []);
  return (
    <div className="">
       Qorilar
       {
        surahDetail.map((item,ind)=>(
          <SurahDetailCard ayahs={item} ind={ind+1} key={item.number}/>
        ))
       }
    </div>
  );
};

export default SurahDetail;
