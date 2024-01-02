import Intro from "./Intro"

function App() {

  // here `string ${js variable} string continues`
  // similarly include js variables inside {} inside html tags (do not include dollar sign '$' here) 
  const userName = "Aditya";

  return (
    <>
    <Intro />
     {/* intro is a function */}
    <h4> Kudos</h4>
    <p>to you {userName}
    {/* {userName is Evaluated Expression} */}
     </p>
    </>
    
  )
}

export default App
