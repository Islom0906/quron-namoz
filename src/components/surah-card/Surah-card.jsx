const SurahCard = ({surah}) => {
  return ( 
    <div className="p-5 bg-white rounded-xl w-full flex items-start flex-col space-y-7 cursor-pointer hover:shadow-2xl duration-300">
      <span className="px-3 py-1 text-spanColor rounded-full bg-spanBg">
        {surah.number}
      </span>
      <div className="context flex flex-col items-start space-y-2">
        <p className="font-bold text-xl">{surah.name}</p>
        <p className="font-bold text-xl opacity-50">{surah.englishName}</p>
        <p className="font-bold text-xl opacity-50">
          {surah.englishNameTranslation}
        </p>
      </div>
    </div>
  )
}

export default SurahCard