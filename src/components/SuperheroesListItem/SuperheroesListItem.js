import { Link } from "react-router-dom";
import img from "../../images/placeholder-superhero-silhouette.png";
import s from "./SuperheroesListItem.module.css";

const SuperheroesListItem = ({ superhero }) => {
  const { _id: id, nickname, images } = superhero;
  const itemImage = images && images[0];

  return (
    <li className={s.listItem}>
      <Link to={`/${id}`} className={s.contentContainer}>
        {itemImage ? (
          <img
            src={itemImage.url}
            width={itemImage.width}
            height={itemImage.height}
            alt={itemImage.tags.join(" ")}
          />
        ) : (
          <img src={img} width="225" height="270" alt="Superhero" />
        )}
        <h2 className={s.itemTitle}>{nickname}</h2>
      </Link>
    </li>
  );
};

export default SuperheroesListItem;
