import { format } from 'date-fns';
import startOfMonth from 'date-fns/startOfMonth';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import compareAsc from 'date-fns/compareAsc';
import isSameDay from 'date-fns/isSameDay';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';

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

  const getCurrentDateTitle = (date) => format(date, 'iii, LLL do y');
  const getEventManagerTitle = (date) =>
    `Events planned for ${format(date, 'LLL do')}`;
  const getStartOfMonth = (date) => startOfMonth(date);
  const getDateForDay = (day, date) =>
    new Date(date.getFullYear(), date.getMonth(), day);
  const getMonthName = (date) => format(date, 'LLLL');
  const switchMonth = (date, amountOfMonths) =>
    amountOfMonths > 0 ? addMonths(date, 1) : subMonths(date, 1);
  const generateDayArr = (date) => {
    let dayArr = [];
    let firstWeekDayOfMonth = getStartOfMonth(date).getDay();

    for (let i = 0; i < firstWeekDayOfMonth - 1; i++) dayArr = [...dayArr, 0];
    for (let i = 1; i <= getDaysInMonth(date); i++) dayArr = [...dayArr, i];
    while (dayArr.length % 7 !== 0) dayArr = [...dayArr, 0];

    return dayArr;
  };
  const checkSameDay = (date1, date2) => isSameDay(date1, date2);
  const compareToToday = (date) =>
    checkSameDay(date, today) ? 1 : compareAsc(date, today) + 1;

  return {
    today,
    weekDays,
    getCurrentDateTitle,
    getEventManagerTitle,
    getStartOfMonth,
    getDateForDay,
    getMonthName,
    switchMonth,
    generateDayArr,
    checkSameDay,
    compareToToday,
  };
})();

export default dateUtility;
