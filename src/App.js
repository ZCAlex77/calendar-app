import appStyle from './styles/app.module.css';
import flex from './styles/flex.module.css';
import Day from './components/Day';

function App() {
  const date = new Date(Date.now());
  const today = date.getDate();
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  const getNumOfDays = () => {
    const numOfDaysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let num = numOfDaysPerMonth[date.getMonth()];
    if(date.getFullYear() % 4 === 0 && num === 28) num += 1;
    return num;
  }
  const generateDayArray = () =>{
    let dayArr = [];
    for(let i = 1; i <= getNumOfDays(); i++)
      dayArr.push(i);
    for(let i = 0; i < date.getDay()%7 - 1; i++)
      dayArr.unshift(0);
    return dayArr;
  }

  return (
    <div className={`${appStyle.app} ${flex.flexCenter} ${flex.flexColumn}`}>
      <h1>{date.toDateString()}</h1>
      <div className={appStyle.calendar}>
        <ul className={`${appStyle.header} ${flex.flexRow}`}>
          { weekDays.map(day => <li key={day}>{day}</li>) }
        </ul>
        <ul className={appStyle.days}>
          {
            generateDayArray().map(day => <Day key={`${day}${Math.floor(Math.random()*1000)}`} num={day} type={day === today?'current':(day < today?'past':'')} />)
          }
        </ul>
      </div>
      <footer>Calendar App &copy; Alexandru Zmău 2022</footer>
    </div>
  );
}

export default App;
