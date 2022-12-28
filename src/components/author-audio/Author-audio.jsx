const AuthorAudio = ({author,authorAudio}) => {
  return (
    <div className="flex flex-col items-center space-y-3 cursor-pointer w-48 flex-shrink-0" onClick={()=> authorAudio(author.value)}>
      <img src={author.img} className="w-24 h-24 rounded-full"  alt="" />
      <p className="text-base font-bold">{author.name}</p>
    </div>
  )
}

export default AuthorAudio
