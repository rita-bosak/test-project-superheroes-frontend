import ImagesGalleryItem from "../ImagesGalleryItem";
import ImagesGalleryUploader from "../ImagesGalleryUploader";
import s from "./ImagesGallery.module.css";

const ImagesGallery = ({ images }) => {
  return (
    <>
      <ul className={s.imagesGallery}>
        {images.map((image) => (
          <ImagesGalleryItem key={image._id} image={image} />
        ))}
      </ul>
      <ImagesGalleryUploader />
    </>
  );
};

export default ImagesGallery;
