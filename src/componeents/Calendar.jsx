import React from 'react'


function Calendar(props) {
  // today
  const tYear = new Date().getFullYear();
  const tMonth = new Date().getMonth();
  const tDate = new Date().getDate();

  // 1. 현재의 년월일 조회 (prps에서 년월일 가져오기)
  let year = props.year;
  let month = props.month;
  let date = props.date;

  // 2. 해당 월의 말일 구하기
  let lastDate = new Date(year,month+1,0).getDate();
  console.log("말일 : " + lastDate);

  // 3. 달력에서 시작할 위치(요일)
  let start_date = new Date(year, month, 1).getDay();
  console.log("시작요일 : " +start_date);

  

  return (
    <div className="calender">
      <header>
        <div className='yearMonth'>
          <h2>{year}</h2>
          <h3>{month+1}월</h3>
        </div>
        <ul className='day'>
          <li>일</li>
          <li>월</li>
          <li>화</li>
          <li>수</li>
          <li>목</li>
          <li>금</li>
          <li>토</li>
        </ul>
      </header>

      <main>
      <ul className="date">
        {
          Array(start_date).fill().map((_,i) => {
            return (
              <li key={i}></li>
            )
          })
        }
          {
            Array(lastDate).fill().map((_,i)=>{
              return (
                <li 
                  style={{
                    color : (i+start_date+1) % 7 == 1? "red" : 
                            (i+start_date+1) % 7 == 0? "blue" : null }}
                  key={i}
                  className={(
                    tDate==(i+1) && 
                    tMonth==month && 
                    tYear==year)?  "today" 
                    : ((i+1)==28 && month==3)? "birthday" : null}  
                  >
                    {i+1}
                </li>
              )
            })
           
          }
        </ul>
      </main>
    </div>
  )
}

export default Calendar