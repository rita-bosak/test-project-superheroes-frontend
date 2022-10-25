import SuperheroImagesGallery from "../SuperheroImagesGallery";
import SuperheroInfoArticle from "../SuperheroInfoArticle";
import SuperheroInfoParagraph from "../SuperheroInfoParagraph";

const SuperheroInfo = ({ superhero }) => {
  const {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  } = superhero;

  return (
    <div>
      <SuperheroImagesGallery images={images} />
      <SuperheroInfoArticle title={nickname}>
        <SuperheroInfoParagraph title="Nickname" info={nickname} />
        <SuperheroInfoParagraph title="Real Name" info={real_name} />
        <SuperheroInfoParagraph
          title="Origin Description"
          info={origin_description}
        />
        <SuperheroInfoParagraph title="Superpowers" info={superpowers} />
        <SuperheroInfoParagraph title="Catch Phrase" info={catch_phrase} />
      </SuperheroInfoArticle>
    </div>
  );
};

export default SuperheroInfo;
