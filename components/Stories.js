import faker from "@faker-js/faker"
import Story from "./Story"
import { useEffect } from "react"
import { useState } from "react"

function Stories() {

    const [users,setUsers] = useState([])

     
    useEffect(()=> {
        const suggestion = [...Array(20)].map((_,i) =>({
           username: faker.name.findName(),
           avatar: faker.image.avatar(),
            id:i,
           
        }))

        console.log(suggestion)
        setUsers(suggestion)
    },[])


  return (
    <div className="flex space-x-2 p-6 bg-white border border-gray-200 rounded-sm mt-8 overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {users?.map( profile => (
          <Story key={profile.id} img = {profile.avatar} username = {profile.username} />
      ))}
    </div>
  )
}

export default Stories
