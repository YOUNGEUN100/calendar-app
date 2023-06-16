import { useState } from 'react'
import './App.css'
import Calender from './componeents/Calender';
import Header from './componeents/Header';
import Button from './componeents/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className='layout'>
        <Button />
        <Calender />
        <Button />
      </div>
     
    </div>
  )
}

export default App
