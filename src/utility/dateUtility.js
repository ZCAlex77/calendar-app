import { format } from 'date-fns';
import startOfMonth from 'date-fns/startOfMonth';
import getDaysInMonth from 'date-fns/getDaysInMonth';

const dateUtility = (() => {
  const today = new Date();
  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const getCurrentDateTitle = () => format(today, 'iii, LLL do y');
  const getStartOfMonth = (date) => startOfMonth(date);
  const generateDayArr = (date) => {
    let dayArr = [];
    let firstWeekDayOfMonth = getStartOfMonth(date).getDay();

    for (let i = 0; i < firstWeekDayOfMonth - 1; i++) dayArr = [...dayArr, 0];
    for (let i = 1; i <= getDaysInMonth(date); i++) dayArr = [...dayArr, i];
    while (dayArr.length % 7 !== 0) dayArr = [...dayArr, 0];

    return dayArr;
  };

  return {
    today,
    weekDays,
    getCurrentDateTitle,
    getStartOfMonth,
    generateDayArr,
  };
})();

export default dateUtility;
