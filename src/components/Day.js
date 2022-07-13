import flex from '../styles/flex.module.css';
import dayStyle from '../styles/day.module.css';

export default function Day({ num, type }){
  return(
    <li className={`${flex.flexCenter} ${dayStyle.day} ${num === 0?dayStyle.none:dayStyle[type]}`}>
      <p>{num || ''}</p>
    </li>
  )
}