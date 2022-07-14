import flex from '../styles/flex.module.css';
import dayStyle from '../styles/day.module.css';

export default function Day({ num, today }){
  let dayClass = num < 0?'none':(num < today?'past':(num === today?'current':'future'));

  return(
    <li className={`${flex.flexCenter} ${dayStyle.day} ${dayStyle[dayClass]}`}>
      <p>{Math.abs(num) || ''}</p>
    </li>
  )
}