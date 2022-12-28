import { useDispatch, useSelector } from "react-redux";
import { selectedLanguage } from "../../slice/surahDetailText";

const Languages = () => {
  const dispatch=useDispatch()

  return (
    <div>
    
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" 
      onChange={(e) => dispatch(selectedLanguage(e.target.value))}>
        <option selected value="uz.sodik">Uz</option>
        <option value="ru.kuliev">Ru</option>
        <option value="en.ahmedali">Eng</option>
      </select>
    </div>
  )
}

export default Languages
