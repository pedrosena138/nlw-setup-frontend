import { useState } from 'react'
import { Habit } from './components/Habit'
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Habit completed={1} />
      <Habit completed={2} />
      <Habit completed={3} />
      <Habit completed={4} />
      <Habit completed={5} />
    </div>
  )
}

export default App
