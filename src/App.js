// import styles
import appStyle from './styles/app.module.css';
import flex from './styles/flex.module.css';

// import components
import AssignmentIcon from '@mui/icons-material/Assignment';
import Day from './components/Day';
import EventManager from './components/EventManager';

// libraries
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid4 } from 'uuid';
import dateUtility from './utility/dateUtility';

function App() {
  const [managerOpenState, setManagerOpenState] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dateUtility.today);
  const [selectedDay, setSelectedDay] = useState(selectedDate.getDate());
  const eventList = useSelector((state) => state);

  const toggleManager = () => {
    setManagerOpenState(1 - managerOpenState);
  };

  return (
    <div className={`${appStyle.app} ${flex.flexCenter} ${flex.flexColumn}`}>
      <h1>{dateUtility.getCurrentDateTitle()}</h1>
      <div className={appStyle.calendar}>
        <ul className={`${appStyle.header} ${flex.flexRow}`}>
          {dateUtility.weekDays.map((day) => (
            <li key={day}>{day}</li>
          ))}
        </ul>
        <ul className={appStyle.days}>
          {dateUtility.generateDayArr(selectedDate).map((day) => (
            <Day
              key={uuid4()}
              day={day}
              today={dateUtility.today.getDate()}
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
        {eventList.filter((el) => el.date.day === selectedDate.getDate())
          .length ? (
          <div className={appStyle.notification}>
            {
              eventList.filter((el) => el.date.day === selectedDate.getDate())
                .length
            }
          </div>
        ) : (
          ''
        )}
      </button>
      <EventManager
        selectedDay={selectedDay}
        openState={managerOpenState ? 'open' : ''}
      />
      <footer>Calendar App &copy; Alexandru Zmău 2022</footer>
    </div>
  );
}

export default App;
