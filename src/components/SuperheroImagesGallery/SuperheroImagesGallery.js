import SuperheroImagesGalleryItem from "../SuperheroImagesGalleryItem";

const SuperheroImagesGallery = ({ images }) => {
  return images.map((image) => (
    <ul>
      <SuperheroImagesGalleryItem image={image} />
    </ul>
  ));
};

export default SuperheroImagesGallery;
