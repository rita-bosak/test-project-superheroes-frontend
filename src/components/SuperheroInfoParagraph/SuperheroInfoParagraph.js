import { useState } from "react";
import { TextareaAutosize } from "@mui/material";
import toast from "react-hot-toast";

import { ReactComponent as SaveSvg } from "../../images/icons/save.svg";
import { ReactComponent as CloseSvg } from "../../images/icons/close.svg";
import { ReactComponent as EditSvg } from "../../images/icons/edit.svg";
import { useUpdateSuperheroInfoMutation } from "../../redux/superheroes/superheroesReducer";
import { useParams } from "react-router-dom";
import s from "./SuperheroInfoParagraph.module.css";

const SuperheroInfoParagraph = ({ title, info, property }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(info);
  const [updateSuperheroInfo] = useUpdateSuperheroInfoMutation();
  const { id: superheroId } = useParams();

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value === info) {
      setIsEdit(false);
      return;
    }
    try {
      const payload = value;
      await updateSuperheroInfo({ superheroId, property, payload });
      setIsEdit(false);
    } catch {
      toast.error("Something went wrong!");
    }
  };

  const editBtnToggle = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      <p className={s.info}>
        <span className={s.infoTitle}>{title}: </span>
        {!isEdit ? (
          info
        ) : (
          <>
            <TextareaAutosize
              minRows={1}
              maxRows={1}
              value={value}
              onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit} className={s.saveBtn}>
              <SaveSvg />
            </button>
          </>
        )}
        <button type="button" onClick={editBtnToggle} className={s.editBtn}>
          {!isEdit ? <EditSvg /> : <CloseSvg />}
        </button>
      </p>
    </>
  );
};

export default SuperheroInfoParagraph;
