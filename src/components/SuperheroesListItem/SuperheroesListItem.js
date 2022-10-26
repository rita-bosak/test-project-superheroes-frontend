import { Link } from "react-router-dom";
import s from "./SuperheroesListItem.module.css";

const SuperheroesListItem = ({ superhero }) => {
  const { _id: id, nickname, images } = superhero;

  return (
    <li className={s.listItem}>
      <Link to={`/${id}`} className={s.contentContainer}>
        <img src={images[0].url} alt={images[0].tags.join(" ")} />
        <h2 className={s.itemTitle}>{nickname}</h2>
      </Link>
    </li>
  );
};

export default SuperheroesListItem;
