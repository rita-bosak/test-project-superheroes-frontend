import * as Yup from "yup";

const addSuperheroValidation = Yup.object().shape({
  nickname: Yup.string().required(),
  real_name: Yup.string().required(),
  origin_description: Yup.string().required(),
  superpowers: Yup.string().required(),
  catch_phrase: Yup.string().required(),
  images: Yup.array().required(),
});

export default addSuperheroValidation;
