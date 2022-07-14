import managerStyle from '../styles/eventManager.module.css';

export default function EventManager({ openState }){
  return(
    <div className={`${managerStyle.manager} ${managerStyle[openState]}`}>
      <h1>Event manager</h1>
    </div>
  )
}