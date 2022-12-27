import { useParams } from "react-router-dom";
import { AudioPlayer } from "../";
const SurahDetailCard = ({ayahs,ind}) => {
  const {number}=useParams()
  return (

    <div className="p-6 bg-white rounded-xl w-full space-y-10 mb-10">
      <div className="flex items-center justify-between">
        <span className="text-primary font-bold text-xl">{number}:{ind}</span>
      </div>
      <div className=" sm:w-4/5 mx-auto sm:space-y-10 space-y-5">
        <p className="font-bold sm:text-xl text-base text-center">{ayahs.text}</p>
        <h1 className=" sm:text-xl text-base font-mono text-primary text-center ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
          magnam voluptatum alias sit voluptates non reprehenderit cupiditate
          laborum pariatur quae.
        </h1>
      </div>
      <AudioPlayer  audio={ayahs.audio}/>
    </div>
  );
};

export default SurahDetailCard;
