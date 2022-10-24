const SuperheroImagesGalleryItem = ({ image }) => {
  const { url, tags } = image;
  const tagsString = tags.join(" ");

  return (
    <li>
      <img src={url} alt={tagsString} />
    </li>
  );
};

export default SuperheroImagesGalleryItem;
