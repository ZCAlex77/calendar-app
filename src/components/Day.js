// import styles
import flex from '../styles/flex.module.css';
import dayStyle from '../styles/day.module.css';

// import components
import NewReleasesIcon from '@mui/icons-material/NewReleases';

// libraries
import { useSelector } from 'react-redux';
import dateUtility from '../utility/dateUtility';

export default function Day({
  date,
  isSelected,
  setSelectedDate,
  openManager,
}) {
  let dayClass = date
    ? ['past', 'current', 'future'][dateUtility.compareToToday(date)]
    : 'none';

  const eventList = useSelector((state) => state);

  const handleClick = () => {
    if (dayClass !== 'past' && dayClass !== 'none') {
      setSelectedDate(date);
      openManager(1);
    }
  };

  return (
    <li
      onClick={handleClick}
      className={`${flex.flexCenter} ${dayStyle.day} ${dayStyle[dayClass]} ${
        isSelected ? dayStyle.selectedDay : ''
      }`}
    >
      <p>{date?.getDate()}</p>
      {eventList.filter((event) => dateUtility.checkSameDay(event.date, date))
        .length ? (
        <div>
          <NewReleasesIcon />
        </div>
      ) : (
        ''
      )}
    </li>
  );
}
