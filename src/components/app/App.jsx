import { Route, Routes } from 'react-router-dom';
import {Navbar, Sidebar, Surah} from '../'


function App() {
  return (
    <div className="bg-bg w-full min-h-screen">
      <Navbar/>
      <Sidebar/>
      <main className='pt-[104px] sm:pl-[104px] pl-10 pb-10 pr-10'>
      <Routes>
      <Route path='/' element={<Surah/>} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
