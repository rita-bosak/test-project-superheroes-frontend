import { TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";
import s from "./SuperheroFormTextField.module.css";

const SuperheroFormTextField = ({ name, label, value, onChange }) => {
  return (
    <Field
      as={TextField}
      name={name}
      label={label}
      type="text"
      autoComplete="off"
      value={value}
      onChange={onChange}
      fullWidth
      helperText={<ErrorMessage name={name} />}
      className={s.field}
    />
  );
};

export default SuperheroFormTextField;
