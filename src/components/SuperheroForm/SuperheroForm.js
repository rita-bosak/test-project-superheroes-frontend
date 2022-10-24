import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { toast } from "react-hot-toast";
import { useAddSuperheroMutation } from "../../redux/superheroes/superheroesReducer";
import SuperheroFormTextField from "../SuperheroFormTextField";

const SuperheroForm = ({ onClose }) => {
  const [addSuperhero] = useAddSuperheroMutation();

  return (
    <Formik
      initialValues={{
        nickname: "",
        real_name: "",
        origin_description: "",
        superpowers: "",
        catch_phrase: "",
        images: "",
      }}
      onSubmit={({
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images,
      }) => {
        const data = new FormData();
        data.append("images", images[0]);
        data.append("nickname", nickname);
        data.append("real_name", real_name);
        data.append("origin_description", origin_description);
        data.append("superpowers", superpowers);
        data.append("catch_phrase", catch_phrase);

        addSuperhero(data);

        toast.success("New Superhero added!");

        onClose();
      }}
      // validationSchema={}
    >
      {({ values, handleChange, isSubmitting, setFieldValue }) => (
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
            onChange={(e) => {
              setFieldValue("images", e.currentTarget.files);
            }}
          />
          <Button type="submit" variant="outlined" disabled={isSubmitting}>
            Зберегти
          </Button>
          <Button variant="outlined" type="button" onClick={onClose}>
            Скасувати
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SuperheroForm;
