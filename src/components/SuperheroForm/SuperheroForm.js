import { Button } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import { toast } from "react-hot-toast";
import { SyncLoader } from "react-spinners";

import { useAddSuperheroMutation } from "../../redux/superheroes/superheroesReducer";
import SuperheroFormTextField from "../SuperheroFormTextField";
import addSuperheroValidation from "../../services/validationSchemas/addSuperheroValidation";

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

  const handleSubmit = async (formDataValues) => {
    try {
      await addSuperhero(formDataValues);
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
        const formData = createFormData(values);
        handleSubmit(formData);
      }}
    >
      {({ values, handleChange, isSubmitting, setFieldValue }) => {
        const handleImagesInput = (e) => {
          const filesArray = [...e.currentTarget.files];
          setFieldValue("images", filesArray);
        };

        return (
          <Form encType="multipart/form-data">
            <SuperheroFormTextField
              name="nickname"
              value={values.nickname}
              onChange={handleChange}
            />
            <SuperheroFormTextField
              name="real_name"
              value={values.real_name}
              onChange={handleChange}
            />
            <SuperheroFormTextField
              name="origin_description"
              value={values.origin_description}
              onChange={handleChange}
            />
            <SuperheroFormTextField
              name="superpowers"
              value={values.superpowers}
              onChange={handleChange}
            />
            <SuperheroFormTextField
              name="catch_phrase"
              value={values.catch_phrase}
              onChange={handleChange}
            />
            <input
              name="images"
              type="file"
              multiple
              onChange={handleImagesInput}
            />
            <ErrorMessage component="div">fee</ErrorMessage>
            <Button type="submit" variant="outlined" disabled={isSubmitting}>
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default SuperheroForm;
