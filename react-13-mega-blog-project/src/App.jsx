// 1. go to notes.md
import './App.css'

function App() {
  // Accessing the environment variables
 // console.log(process.env.REACT_APP_APPWRITE_URL);
  // Now after doing this, i.e. making any changes in the environment variable file, you need to reload the window and do npm run dev again
  // but this was the step when you made any app using create react app

  // Vite:
  console.log(import.meta.env.VITE_APPWRITE_URL);
  // We donot usually use this approach as sometimes when we run an app, the env does not load properly due to which our app crashes, for that, we do this same step above in an efficient production ready way.
  // 4. Go to config.js for this


  return (
    <>
      <h1>Blog With Appwrite</h1>
    </>
  )
}

export default App
