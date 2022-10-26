import SuperheroImagesGalleryItem from "../SuperheroImagesGalleryItem";
import ImagesGalleryUploader from "../ImagesGalleryUploader";
import s from "./SuperheroImagesGallery.module.css";

const SuperheroImagesGallery = ({ images }) => {
  return (
    <>
      <ul className={s.imagesGallery}>
        {images.map((image) => (
          <SuperheroImagesGalleryItem key={image._id} image={image} />
        ))}
      </ul>
      <ImagesGalleryUploader />
    </>
  );
};

export default SuperheroImagesGallery;
