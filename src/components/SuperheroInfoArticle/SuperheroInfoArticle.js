const SuperheroInfoArticle = ({ title, children }) => (
  <article>
    <h1>{title}</h1>
    {children}
  </article>
);

export default SuperheroInfoArticle;
