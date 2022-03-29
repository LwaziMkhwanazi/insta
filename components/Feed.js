import Stories from "./Stories"
import Posts from "./Posts"

function Feed() {

  
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* section */}
      <div className="col-span-2">
               {/* stories */}
               <Stories/>
               <Posts/>
      </div>

     
        {/* feed */}

      {/* section */}
      {/* mini profile */}
      {/* seggestions */}
    </main>
  )
}

export default Feed
