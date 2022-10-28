import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { SyncLoader } from "react-spinners";

import { useAddSuperheroImageMutation } from "../../redux/superheroes/superheroesReducer";
import s from "./ImagesGalleryUploader.module.css";

const ImagesGalleryUploader = () => {
  const [addSuperheroImage, { isLoading }] = useAddSuperheroImageMutation();
  const { id: superheroId } = useParams();

  const handleFileInputChange = async (e) => {
    const file = e.currentTarget.files[0];

    if (!file) {
      return;
    }

    try {
      const data = new FormData();
      data.append("image", file);

      await addSuperheroImage({ superheroId, data });

      toast.success("Successful!");
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <form encType="multipart/form-data">
      <label htmlFor="image-uploader" className={s.customFileUploader}>
        {isLoading && <SyncLoader size={5} color="#757b7a" />}
        Upload more images!
      </label>
      <input
        id="image-uploader"
        type="file"
        onChange={handleFileInputChange}
        className={s.inputTypeFile}
      />
    </form>
  );
};

export default ImagesGalleryUploader;
