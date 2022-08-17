import flex from '../styles/flex.module.css';
import dayStyle from '../styles/day.module.css';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { useSelector } from 'react-redux';

export default function Day({ day, today, setSelectedDay, openManager }) {
  let dayClass =
    day === 0
      ? 'none'
      : day < today
      ? 'past'
      : day === today
      ? 'current'
      : 'future';

  const eventList = useSelector((state) => state);

  const handleClick = () => {
    if (day >= today) {
      setSelectedDay(day);
      openManager(1);
    }
  };

  return (
    <li
      onClick={handleClick}
      className={`${flex.flexCenter} ${dayStyle.day} ${dayStyle[dayClass]}`}
    >
      <p>{day}</p>
      {eventList.filter((el) => el.date.day === day).length > 0 ? (
        <div>
          <NewReleasesIcon />
        </div>
      ) : (
        ''
      )}
    </li>
  );
}
