import { TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";

const SuperheroFormTextField = ({ name, value, onChange }) => {
  return (
    <Field
      as={TextField}
      name={name}
      label={name}
      type="text"
      autoComplete="off"
      value={value}
      onChange={onChange}
      helperText={<ErrorMessage name={name} />}
    />
  );
};

export default SuperheroFormTextField;
