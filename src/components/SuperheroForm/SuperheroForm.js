import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { toast } from "react-hot-toast";
import { SyncLoader } from "react-spinners";

import { useAddSuperheroMutation } from "../../redux/superheroes/superheroesReducer";
import SuperheroFormTextField from "../SuperheroFormTextField";
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

        const error = (name) => errors[name] && touched[name];

        return (
          <Form encType="multipart/form-data" className={s.form}>
            <SuperheroFormTextField
              name="nickname"
              label="Nickname"
              value={values.nickname}
              onChange={handleChange}
              error={error("nickname")}
            />
            <SuperheroFormTextField
              name="real_name"
              label="Real Name"
              value={values.real_name}
              onChange={handleChange}
              error={error("real_name")}
            />
            <SuperheroFormTextField
              name="origin_description"
              label="Origin Description"
              value={values.origin_description}
              onChange={handleChange}
              error={error("origin_description")}
            />
            <SuperheroFormTextField
              name="superpowers"
              label="Superpowers"
              value={values.superpowers}
              onChange={handleChange}
              error={error("superpowers")}
            />
            <SuperheroFormTextField
              name="catch_phrase"
              label="Catch Phrase"
              value={values.catch_phrase}
              onChange={handleChange}
              error={error("catch_phrase")}
            />
            <input
              name="images"
              type="file"
              multiple
              onChange={handleImagesInput}
            />
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
