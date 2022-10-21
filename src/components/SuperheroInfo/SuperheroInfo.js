import SuperheroImagesGallery from "../SuperheroImagesGallery";
import SuperheroInfoArticle from "../SuperheroInfoArticle";
import SuperheroInfoParagraph from "../SuperheroInfoParagraph";

const SuperheroInfo = ({ superhero }) => {
  const {
    nickname,
    realName,
    originDescription,
    superpowers,
    catchPhrase,
    images,
  } = superhero;

  return (
    <div>
      <SuperheroImagesGallery images={images} />
      <SuperheroInfoArticle title={nickname}>
        <SuperheroInfoParagraph title="Nickname" info={nickname} />
        <SuperheroInfoParagraph title="Real Name" info={realName} />
        <SuperheroInfoParagraph
          title="Origin Description"
          info={originDescription}
        />
        <SuperheroInfoParagraph title="Superpowers" info={superpowers} />
        <SuperheroInfoParagraph title="Catch Phrase" info={catchPhrase} />
      </SuperheroInfoArticle>
    </div>
  );
};

export default SuperheroInfo;
