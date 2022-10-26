import s from "./SuperheroInfoParagraph.module.css";

const SuperheroInfoParagraph = ({ title, info }) => (
  <p className={s.info}>
    <span className={s.infoTitle}>{title}: </span>
    {info}
  </p>
);

export default SuperheroInfoParagraph;
