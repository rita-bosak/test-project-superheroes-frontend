import SuperheroImagesGalleryItem from "../SuperheroImagesGalleryItem";

const SuperheroImagesGallery = ({ images }) => {
  return images.map((image) => (
    <ul>
      <SuperheroImagesGalleryItem key={image._id} image={image} />
    </ul>
  ));
};

export default SuperheroImagesGallery;
