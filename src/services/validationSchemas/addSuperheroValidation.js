import * as Yup from "yup";

const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/webp",
];

const imageFormatTest = (files) => {
  const check = files.every((file) => SUPPORTED_FORMATS.includes(file.type));
  return check;
};

const addSuperheroValidation = Yup.object().shape({
  nickname: Yup.string().required(),
  real_name: Yup.string().required(),
  origin_description: Yup.string().required(),
  superpowers: Yup.string().required(),
  catch_phrase: Yup.string().required(),
  images: Yup.array()
    .min(1, "Please, upload at least 1 image of your Superhero!")
    .test(
      "Images format test",
      "Only images in png, jpg, webp formats are accepted",
      imageFormatTest
    )
    .required(),
});

export default addSuperheroValidation;
