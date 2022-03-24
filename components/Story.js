import Image from "next/image"

function Story({img,username}) {
  return (
    <div className="">
      <img className="h-10 w-10" src={img} />
      <p>{username}</p>
    </div>
  )
}

export default Story
