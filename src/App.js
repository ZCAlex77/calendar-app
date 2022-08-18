// import styles
import appStyle from './styles/app.module.css';
import flex from './styles/flex.module.css';

// import components
import AssignmentIcon from '@mui/icons-material/Assignment';
import Day from './components/Day';
import EventManager from './components/EventManager';

// libraries
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid4 } from 'uuid';
import dateUtility from './utility/dateUtility';

function App() {
  const getSelectedEvents = () =>
    eventList.filter((event) =>
      dateUtility.checkSameDay(event.date, selectedDate)
    );

  const [managerOpenState, setManagerOpenState] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dateUtility.today);
  const eventList = useSelector((state) => state);
  const [selectedEvents, setSelectedEvents] = useState(getSelectedEvents());

  useEffect(() => {
    setSelectedEvents(() => getSelectedEvents());
  }, [selectedDate]);

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
          {dateUtility.generateDayArr(selectedDate).map((day) => {
            let date = day
              ? dateUtility.getDateForDay(day, selectedDate)
              : null;
            return (
              <Day
                key={uuid4()}
                date={date}
                isSelected={
                  date ? dateUtility.checkSameDay(date, selectedDate) : false
                }
                setSelectedDate={setSelectedDate}
                openManager={setManagerOpenState}
              />
            );
          })}
        </ul>
      </div>
      <button
        onClick={toggleManager}
        className={`${appStyle.taskButton} ${flex.flexCenter}`}
      >
        <AssignmentIcon />
        {selectedEvents.length ? (
          <div className={appStyle.notification}>{selectedEvents.length}</div>
        ) : (
          ''
        )}
      </button>
      <EventManager
        selectedDate={selectedDate}
        openState={managerOpenState ? 'open' : ''}
      />
      <footer>Calendar App &copy; Alexandru Zmău 2022</footer>
    </div>
  );
}

export default App;
