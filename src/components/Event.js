import DeleteIcon from '@mui/icons-material/Delete';
import flex from '../styles/flex.module.css';

export default function Event({text}){
  return (
    <li className={flex.flexCenter}>{text}<span><button><DeleteIcon /></button></span></li>
  )
}