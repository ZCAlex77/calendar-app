import managerStyle from "../styles/eventManager.module.css";
import flex from "../styles/flex.module.css";
import Event from "../components/Event";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEvent } from "../redux/actions";

export default function EventManager({ selectedDay, openState }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(Date.now());
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state);
  date.setDate(selectedDay);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    let id = `${text[Math.floor(Math.random() * text.length)]}${Math.floor(
      Math.random() * 10000
    )}`;
    const newEvent = {
      id: id,
      text: text,
      date: { day: selectedDay, month: date.getMonth() },
    };
    dispatch(addEvent(newEvent));
    setText("");
  };

  return (
    <div className={`${managerStyle.manager} ${managerStyle[openState]}`}>
      <h1>Event manager</h1>
      <h3>Events planned for {`${months[date.getMonth()]} ${selectedDay}`}:</h3>
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
          .filter((el) => el.date.day === selectedDay)
          .map((el) => (
            <Event
              key={`${Math.floor(Math.random() * 10000)}${Math.floor(
                Math.random() * 10000
              )}`}
              text={el.text}
              eventId={el.id}
            />
          ))}
      </ul>
    </div>
  );
}
