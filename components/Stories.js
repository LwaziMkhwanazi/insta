import faker from "faker"
import Story from "./Story"
import { useEffect } from "react"
import { useState } from "react"

function Stories() {

    const [users,setUsers] = useState([])

    useEffect(()=> {
        const suggestion = [...Array(20)].map((_,i) =>({
            ...faker.helpers.contextualCard(),
            id:i
        }))

        console.log(suggestion)
        setUsers(suggestion)
    },[])


  return (
    <div>
      {users?.map( profile => (
          <Story key={profile.id} />
      ))}
    </div>
  )
}

export default Stories
