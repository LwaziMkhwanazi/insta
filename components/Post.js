import React from 'react'
import {BookmarkIcon,ChatIcon,DotsHorizontalIcon,EmojiHappyIcon,HandIcon,PaperAirplaneIcon} from "@heroicons/react/outline"
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"

 
function Post({id,username,img,userImage,caption}) {
  return (
    <div className='bg-white border rounded-sm my-7'>
     
      {/* Header */}
        <div className="flex items-center p-5">
          <img 
            src={userImage}
              className = "rounded-full h-12 w-12 mr-3 border p-1 object-contain"
            alt = "user Image icon"
          />
          <p className='flex-1 font-bold'>{username}</p>

          <DotsHorizontalIcon className='h-5'/>
        </div>

      {/* img */}
      <img src = {img} className =" w-full object-cover" alt = "Post Image"/>

      {/* buttons  */}

      {/* caption  */}

      {/* comments  */}

      {/* input box */}
    </div>
  )
}

export default Post
