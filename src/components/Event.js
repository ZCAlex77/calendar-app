import DeleteIcon from "@mui/icons-material/Delete";
import flex from "../styles/flex.module.css";
import { useDispatch } from "react-redux";
import { removeEvent } from "../redux/actions";

export default function Event({ text, eventId }) {
  const dispatch = useDispatch();

  return (
    <li className={flex.flexCenter}>
      {text}
      <span>
        <button onClick={() => dispatch(removeEvent(eventId))}>
          <DeleteIcon />
        </button>
      </span>
    </li>
  );
}
