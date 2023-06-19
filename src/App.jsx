import { useState } from 'react'
import './App.css'
import Calendar from './componeents/Calendar';
import Header from './componeents/Header';

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());
  // console.log("app날짜:", year,month);

  const prevMonth = () => {
    if (month == 0) {
      setYear(year-1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  }

  const nextMonth = () => {
    if (month == 11) {
      setYear(year+1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  }

  return (
    <div>
      <Header />
      <div className='layout'>
        <button className='chMonth' onClick={prevMonth}>◀</button>
        <Calendar year={year} month={month} date={date}/>
        <button className='chMonth' onClick={nextMonth}>▶</button>
      </div>
     
    </div>
  )
}

export default App
