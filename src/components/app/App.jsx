import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Surah, SurahDetail } from "../";

function App() {
  return (
    <div className="bg-bg w-full min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="pt-[104px] sm:pl-[104px] pl-10 sm:pb-10 pb-20 pr-10">
        <Routes>
          <Route path="/" element={<Surah />} />
          <Route path="/surah-detail/:number" element={<SurahDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
