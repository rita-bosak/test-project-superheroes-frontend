import SuperheroImagesGalleryItem from "../SuperheroImagesGalleryItem";

const SuperheroImagesGallery = ({ images }) => (
  <ul>
    {images.map((image) => (
      <SuperheroImagesGalleryItem key={image._id} image={image} />
    ))}
  </ul>
);

export default SuperheroImagesGallery;
