import appStyle from "./styles/app.module.css";
import flex from "./styles/flex.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Day from "./components/Day";
import EventManager from "./components/EventManager";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const date = new Date(Date.now());
  const today = date.getDate();
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const numOfDaysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [managerOpenState, setManagerOpenState] = useState(0);
  const [selectedDay, setSelectedDay] = useState(today);
  const eventList = useSelector((state) => state);

  const getNumOfDays = (month, year) => {
    let num = numOfDaysPerMonth[month];
    if (year % 4 === 0 && num === 28) num += 1;
    return num;
  };
  const generateDayArray = (month, currDay) => {
    let dayArr = [],
      lastMonth = month ? month - 1 : 11;
    for (let i = 1; i <= getNumOfDays(month, date.getFullYear()); i++)
      dayArr.push(i);
    for (let i = 0; i < currDay % 7; i++)
      dayArr.unshift(-(numOfDaysPerMonth[lastMonth] - i));
    return dayArr;
  };
  const toggleManager = () => {
    setManagerOpenState(1 - managerOpenState);
  };

  return (
    <div className={`${appStyle.app} ${flex.flexCenter} ${flex.flexColumn}`}>
      <h1>{date.toDateString()}</h1>
      <div className={appStyle.calendar}>
        <ul className={`${appStyle.header} ${flex.flexRow}`}>
          {weekDays.map((day) => (
            <li key={day}>{day}</li>
          ))}
        </ul>
        <ul className={appStyle.days}>
          {generateDayArray(date.getMonth(), date.getDate()).map((day) => (
            <Day
              key={`${day}${Math.floor(Math.random() * 1000)}`}
              num={day}
              today={today}
              setSelectedDay={setSelectedDay}
              openManager={setManagerOpenState}
            />
          ))}
        </ul>
      </div>
      <button
        onClick={toggleManager}
        className={`${appStyle.taskButton} ${flex.flexCenter}`}
      >
        <AssignmentIcon />
        {eventList.filter((el) => el.date.day === selectedDay).length ? (
          <div className={appStyle.notification}>
            {eventList.filter((el) => el.date.day === selectedDay).length}
          </div>
        ) : (
          ""
        )}
      </button>
      <EventManager
        selectedDay={selectedDay}
        openState={managerOpenState ? "open" : ""}
      />
      <footer>Calendar App &copy; Alexandru Zm??u 2022</footer>
    </div>
  );
}

export default App;
