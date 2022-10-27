import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { toast } from "react-hot-toast";
import { SyncLoader } from "react-spinners";

import { useAddSuperheroMutation } from "../../redux/superheroes/superheroesReducer";
import SuperheroFormField from "../SuperheroFormField";
import addSuperheroValidation from "../../services/validationSchemas/addSuperheroValidation";
import s from "./SuperheroForm.module.css";

const SuperheroForm = ({ onClose }) => {
  const [addSuperhero, { isLoading }] = useAddSuperheroMutation();

  const createFormData = (values) => {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    } = values;

    const data = new FormData();
    data.append("nickname", nickname);
    data.append("real_name", real_name);
    data.append("origin_description", origin_description);
    data.append("superpowers", superpowers);
    data.append("catch_phrase", catch_phrase);
    images.forEach((image) => data.append("images", image));

    return data;
  };

  const handleSubmit = async (values) => {
    try {
      const formData = createFormData(values);
      await addSuperhero(formData);
      toast.success("New Superhero added!");
      onClose();
    } catch {
      toast.error("Something went wrong :( Try again!");
    }
  };

  return (
    <Formik
      validateOnBlur
      initialValues={{
        nickname: "",
        real_name: "",
        origin_description: "",
        superpowers: "",
        catch_phrase: "",
        images: [],
      }}
      validationSchema={addSuperheroValidation}
      onSubmit={(values) => {
        if (values.images.length === 0) {
          return toast.error("Upload images of your Superhero!");
        }
        handleSubmit(values);
      }}
    >
      {({
        values,
        handleChange,
        isSubmitting,
        setFieldValue,
        errors,
        touched,
      }) => {
        const handleImagesInput = (e) => {
          const filesArray = [...e.currentTarget.files];
          setFieldValue("images", filesArray);
        };

        const error = (name) => (touched[name] && errors[name] ? true : false);

        return (
          <Form encType="multipart/form-data" className={s.form}>
            <SuperheroFormField
              name="nickname"
              label="Nickname"
              value={values.nickname}
              onChange={handleChange}
              error={error("nickname")}
            />
            <SuperheroFormField
              name="real_name"
              label="Real Name"
              value={values.real_name}
              onChange={handleChange}
              error={error("real_name")}
            />
            <SuperheroFormField
              name="origin_description"
              label="Origin Description"
              value={values.origin_description}
              onChange={handleChange}
              error={error("origin_description")}
            />
            <SuperheroFormField
              name="superpowers"
              label="Superpowers"
              value={values.superpowers}
              onChange={handleChange}
              error={error("superpowers")}
            />
            <SuperheroFormField
              name="catch_phrase"
              label="Catch Phrase"
              value={values.catch_phrase}
              onChange={handleChange}
              error={error("catch_phrase")}
            />
            <input
              name="images"
              id="form-image-uploader"
              type="file"
              multiple
              onChange={handleImagesInput}
              className={s.inputFile}
            />
            <div className={s.buttonsContainer}>
              <Button
                type="submit"
                variant="outlined"
                disabled={isSubmitting}
                sx={{ mr: 3 }}
              >
                {isLoading && <SyncLoader size={5} color="#757b7a" />}Зберегти
              </Button>
              <Button
                variant="outlined"
                type="button"
                disabled={isSubmitting}
                onClick={onClose}
              >
                Скасувати
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SuperheroForm;
