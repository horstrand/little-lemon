import React, { useState, useEffect, useRef } from 'react';
import styles from './Reservation.module.css';
import useSubmit from '../hooks/useSubmit';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Assets from '../assets';

function Reservation() {
  const [message, setMessage] = useState();
  const [date, setDate] = useState();
  const timeRef = useRef();
  const guestsRef = useRef();
  const occasionRef = useRef();

  useEffect(()=>{
    const fetchData = async ()=>{
      // const array = await fetchAPI(Date(date))
    }
    fetchData()
  }, [date])

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDate = new Date(date?.split('-'));
    const currentDate = new Date();
    if (!date){
      setMessage("Please set a proper date")
    }
    else if (selectedDate < currentDate){
      setMessage(`You can't select a date before today, ${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`)
    }
    else if(!guestsRef.current?.value){
      setMessage("Please define a number of diners")
    }
    else{
      setMessage(null);
    }
  }

  return (
    <main>
      <div className={styles.center}>
        <img src={Assets.images.diningRoom} alt="dining room" width="400px" />
        <h1>Make your reservation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input onChange={(e)=>setDate(e.target.value)} type="date" id="res-date" />
        <label htmlFor="res-time">Choose time</label>
        <select ref={timeRef} id="res-time ">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input ref={guestsRef} type="number" placeholder="1" min="1" max="10" id="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select ref={occasionRef} id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        {message && <p>{message}</p>}
        <input type="submit" value="Make Your reservation" />
      </form>
      </div>
    </main>
  )
}


export default Reservation;