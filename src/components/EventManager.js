import managerStyle from '../styles/eventManager.module.css';
import flex from '../styles/flex.module.css';
import Event from '../components/Event';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

export default function EventManager({ selectedDay, openState }){
  const date = new Date(Date.now());
  const [text, setText] = useState('');
  date.setDate(selectedDay);

  const handleSubmit = (ev) =>{
    ev.preventDefault();
    setText('');
  }

  return(
    <div className={`${managerStyle.manager} ${managerStyle[openState]}`}>
      <h1>Event manager</h1>
      <h3>Events planned for {date.toUTCString().split(' 2')[0]}:</h3>
      <ul className={flex.flexColumn}>
        <Event text="Feed the dog" />
        <Event text="Sleep" />
        <li>
          <form onSubmit={handleSubmit} className={`${managerStyle.addEvent} ${flex.flexRow}`}>
            <button><AddIcon /></button>
            <input onChange={ev => setText(ev.target.value)} type="text" placeholder="Type event name here" value={text} required />
          </form>
        </li>
      </ul>
    </div>
  )
}