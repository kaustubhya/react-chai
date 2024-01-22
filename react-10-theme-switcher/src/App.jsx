import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  {/* 1. Go to Theme.js */}

  // We now got the values for the theme.provider
  // But for the buttons, let us do something

  const [themeMode, setThemeMode] = useState("light")

  // Now, we got the methods but their functionality is not yet defined, so let us do that below

  // 🛑🛑🛑🛑 Keep the NAMES of the method same, and use the above useState hook inside them to set the theme

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  // Actual change in theme
  useEffect(() => {
    // When the site loads/reloads we will do the following

    // 1. Remove the existing light / dark theme 
    // Here we will use classic JS query selector as we are doing things in client side only
    // Remove theme from html class

    document.querySelector('html').classList.remove("light", "dark")
    // Remove light or dark, whatever is there by default or set earlier

    document.querySelector('html').classList.add(themeMode)
    // here put theme mode to set either light or dark theme (depending on which is currently been removed, if dark is removed, go to light and vice versa)

  }, [themeMode])

  // We added this dependency to allow the useEffect to run again whenever the themeMode is changed. Hence put it in dependency

  // 3. Go to components => ThemeButton.jsx

  return (
    <>
    {/* Wrapping inside ThemeProvider, we can also wrap it inside main.jsx */}
    {/* Also simply wrapping isn't enough, we need to give values to tell what things each component will use and has access to */}
    {/* The values here are the objects and methods inside ThemeContext method, so let us call them */}
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      {/* SO now theme button and Card component will get access to these methods and variables */}
      <div className="flex flex-wrap min-h-screen items-center">
        {/* min-h-screen	=> min-height: 100vh; */}
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* max-w-sm =>	max-width: 24rem; /* 384px */}
            
            <ThemeButton />
                        
          </div>

          <div className="w-full max-w-sm mx-auto">

            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
     
    </>
  )
}

export default App

// 6. Go to Theme Button Again
