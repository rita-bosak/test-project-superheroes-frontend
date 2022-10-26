import s from "./SuperheroInfoArticle.module.css";

const SuperheroInfoArticle = ({ title, children }) => (
  <article className={s.article}>
    <h1 className={s.articleTitle}>{title}</h1>
    {children}
  </article>
);

export default SuperheroInfoArticle;
