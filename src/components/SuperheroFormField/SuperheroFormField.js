import { TextField } from "@mui/material";
import { Field } from "formik";

const SuperheroFormField = ({ name, label, value, onChange, error }) => {
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
      margin="normal"
      required
      error={error}
    />
  );
};

export default SuperheroFormField;
