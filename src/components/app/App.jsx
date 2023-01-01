import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Surah, SurahDetail, AudioPlayerHome, Namoz } from "../";
import NamozService from "../../service/namoz";

function App() {
  const [isAudio, setIsAudio] = useState(false)
  const { audio,isPlaying } = useSelector(state => state.surahDetail)

  
  
 useEffect(() => {
   if(audio!==""){
    setIsAudio(true)
   }else{
    setIsAudio(false)
   }
 }, [audio])
 
  return (
    <div className="bg-bg w-full min-h-screen">
      <Navbar />
      <Sidebar />
      {isAudio &&
        <AudioPlayerHome audio={audio}  setIsAudio={setIsAudio} />
      }
      <main className="pt-[104px] sm:pl-[104px] pl-10 sm:pb-10 pb-20 pr-10">
        <Routes>
          <Route path="/" element={<Surah />} />
          <Route path="/namoz" element={<Namoz />} />
          <Route path="/surah-detail/:number" element={<SurahDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
