import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import SuperheroFormTextField from "../SuperheroFormTextField";

const SuperheroForm = ({ onSubmit }) => {
  const navigate = useNavigate();

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
      onSubmit={(values) => {
        onSubmit(values);
        navigate("/");
      }}
      // validationSchema={}
    >
      <Form>
        <SuperheroFormTextField
          name="nickname"
          // value={}
          // onChange={}
        />
        <SuperheroFormTextField
          name="real_name"
          // value={}
          // onChange={}
        />
        <SuperheroFormTextField
          name="origin_description"
          // value={}
          // onChange={}
        />
        <SuperheroFormTextField
          name="superpowers"
          // value={}
          // onChange={}
        />
        <SuperheroFormTextField
          name="catch_phrase"
          // value={}
          // onChange={}
        />
        <SuperheroFormTextField
          name="images"
          // value={}
          // onChange={}
        />
        <Button type="submit" variant="filled">
          Зберегти
        </Button>
        <Button variant="filled" type="button" onClick={() => navigate("/")}>
          Скасувати
        </Button>
      </Form>
    </Formik>
  );
};

export default SuperheroForm;
