import flex from '../styles/flex.module.css';
import dayStyle from '../styles/day.module.css';

export default function Day({ num, today, setSelectedDay, openManager }){
  let dayClass = num < 0?'none':(num < today?'past':(num === today?'current':'future'));
  const handleClick = () =>{
    if(num >= today){
      setSelectedDay(num);
      openManager(1);
    }
  }

  return(
    <li onClick={handleClick} className={`${flex.flexCenter} ${dayStyle.day} ${dayStyle[dayClass]}`}>
      <p>{Math.abs(num) || ''}</p>
    </li>
  )
}