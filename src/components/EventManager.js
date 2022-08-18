// import styles
import managerStyle from '../styles/eventManager.module.css';
import flex from '../styles/flex.module.css';

// import components
import Event from '../components/Event';
import AddIcon from '@mui/icons-material/Add';

// libraries
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEvent } from '../redux/actions';
import { v4 as uuid4 } from 'uuid';
import dateUtility from '../utility/dateUtility';

export default function EventManager({ selectedDate, openState }) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    let id = uuid4(),
      date = selectedDate;

    const newEvent = {
      id,
      text,
      date,
    };

    dispatch(addEvent(newEvent));
    setText('');
  };

  return (
    <div className={`${managerStyle.manager} ${managerStyle[openState]}`}>
      <h1>Event manager</h1>
      <h3>{dateUtility.getEventManagerTitle(selectedDate)}</h3>
      <ul className={flex.flexColumn}>
        <li>
          <form
            onSubmit={handleSubmit}
            className={`${managerStyle.addEvent} ${flex.flexRow}`}
          >
            <button>
              <AddIcon />
            </button>
            <input
              onChange={(ev) => setText(ev.target.value)}
              type="text"
              placeholder="Type event name here"
              value={text}
              required
            />
          </form>
        </li>
        {eventList
          .filter((event) => dateUtility.checkSameDay(event.date, selectedDate))
          .map((event) => (
            <Event key={event.id} text={event.text} eventId={event.id} />
          ))}
      </ul>
    </div>
  );
}
