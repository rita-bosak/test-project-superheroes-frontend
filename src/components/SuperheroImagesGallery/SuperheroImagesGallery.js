import SuperheroImagesGalleryItem from "../SuperheroImagesGalleryItem";
import { ReactComponent as Add } from "../../images/icons/add.svg";

const SuperheroImagesGallery = ({ images }) => (
  <>
    <ul>
      {images.map((image) => (
        <SuperheroImagesGalleryItem key={image._id} image={image} />
      ))}
    </ul>
    <button type="button">
      <Add />
    </button>
  </>
);

export default SuperheroImagesGallery;
