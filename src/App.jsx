import { useState } from 'react'
import './App.css'
import Calender from './componeents/Calender';
import Header from './componeents/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Calender />
    </div>
  )
}

export default App
