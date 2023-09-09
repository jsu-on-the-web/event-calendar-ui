import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalendarDisplay from './components/CalendarDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CalendarDisplay currentMonth='March' currentYear='2000' />
    </>
  )
}

export default App
