import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { SyncLoader } from "react-spinners";

import SuperheroImagesGalleryItem from "../SuperheroImagesGalleryItem";
import { ReactComponent as Add } from "../../images/icons/add.svg";
import { useAddSuperheroImageMutation } from "../../redux/superheroes/superheroesReducer";
import s from "./SuperheroImagesGallery.module.css";

const SuperheroImagesGallery = ({ images }) => {
  const [addSuperheroImage, { isLoading }] = useAddSuperheroImageMutation();
  const { id: superheroId } = useParams();

  const handleFileInputChange = async (e) => {
    try {
      const data = new FormData();
      const file = e.currentTarget.files[0];
      data.append("image", file);
      await addSuperheroImage({ superheroId, data });
      toast.success("Successful!");
    } catch {
      toast.error("Something went wrong :( Try again!");
    }
  };

  return (
    <>
      <ul>
        {images.map((image) => (
          <SuperheroImagesGalleryItem key={image._id} image={image} />
        ))}
      </ul>
      <form encType="multipart/form-data">
        <label for="add-superhero-image" className={s.customFileUploader}>
          {isLoading ? (
            <SyncLoader size={5} color="#757b7a" />
          ) : (
            <Add className={s.addImageBtn} />
          )}
        </label>
        <input
          id="add-superhero-image"
          type="file"
          onChange={handleFileInputChange}
          className={s.inputTypeFile}
        />
        {/* <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            
          }}
        >
          <Add />
        </button> */}
      </form>
    </>
  );
};

export default SuperheroImagesGallery;
