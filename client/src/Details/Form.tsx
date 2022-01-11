import React, { useState } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { Student } from "../common/types";
import { useForm } from "react-hook-form";
import { error } from "console";
import { Alert } from "@mui/material";

interface FormProps extends RouteComponentProps {
  student?: Student[];
  students?: Student[];
}

const Form: React.FC<FormProps> = ({ student, students }) => {
  const { register, handleSubmit } = useForm();
  const [validateGender, setValidateGender] = useState<string>();
  const [validateBirth, setValidateBirth] = useState<string>();
  const [validateMail, setValidateMail] = useState<string>();
  const [alert, setAlert] = useState<string>("none");

  const handleGenderVailditon = (e: React.FormEvent<HTMLInputElement>) => {
    if (
      e.currentTarget.value === "Male" ||
      e.currentTarget.value === "Female"
    ) {
      setValidateGender(" ");
    } else {
      setValidateGender("Please enter Male/Female only");
    }
  };
  const handleBirthVailditon = (e: React.FormEvent<HTMLInputElement>) => {
    if (
      e.currentTarget.value.length === 4 &&
      typeof parseInt(e.currentTarget.value) === "number"
    ) {
      setValidateBirth(" ");
    } else {
      setValidateBirth("4 Numbers Only");
    }
  };

  const handleMailVailditon = (e: React.FormEvent<HTMLInputElement>) => {
    if (
      e.currentTarget.value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null
    ) {
      setValidateMail(" ");
    } else {
      setValidateMail("Mail is not valid ");
    }
  };
  //get values from form and update in local storage
  const handelSubmit = (data: any) => {
    data.preventDefault();
    if (student && students) {
      students[Number(student[0].id) - 1].name = data.target[0].value;
      students[Number(student[0].id) - 1].gender = data.target[1].value;
      students[Number(student[0].id) - 1].city = data.target[2].value;
      students[Number(student[0].id) - 1].birthYear = data.target[3].value;
      students[Number(student[0].id) - 1].school = data.target[4].value;
      students[Number(student[0].id) - 1].mail = data.target[5].value;
      students[Number(student[0].id) - 1].phone = data.target[6].value;
      localStorage.setItem("students", JSON.stringify(students));
      setAlert("");
    }
  };

  return (
    <>
      <Alert style={{ display: alert }} variant="outlined" severity="info">
        The student update successfully 😃 !
        <Link className="link" to="/">
          {" "}
          back{" "}
        </Link>
      </Alert>
      <form className="form" onSubmit={handelSubmit}>
        <div className="label__container">
          <input
            {...register("name")}
            defaultValue={(student && student[0].name) || " "}
            className="input"
            type="text"
            placeholder="Enter Student Name"
          />
        </div>
        <div className="label__container">
          <input
            name="gender"
            defaultValue={(student && student[0].gender) || ""}
            className="input"
            type="text"
            placeholder="Enter Student Gender"
            onChange={handleGenderVailditon}
          />
          <p>{validateGender}</p>
        </div>

        <div className="label__container">
          <input
            defaultValue={(student && student[0].city) || ""}
            className="input"
            type="text"
            placeholder="Enter Student City"
          />
        </div>
        <div className="label__container">
          <input
            defaultValue={(student && student[0].birthYear) || ""}
            className="input"
            type="text"
            placeholder="Enter Student BirthYear"
            onChange={handleBirthVailditon}
          />
          <p>{validateBirth}</p>
        </div>

        <div className="label__container">
          <input
            defaultValue={(student && student[0].school) || ""}
            className="input"
            type="text"
            placeholder="Enter Student School"
          />
        </div>
        <div>
          <div className="label__container">
            <input
              defaultValue={(student && student[0].mail) || ""}
              className="input"
              type="text"
              placeholder="Enter Student Mail"
              onChange={handleMailVailditon}
            />
            <p>{validateMail}</p>
          </div>
          <div className="label__container">
            <input
              defaultValue={(student && student[0].phone) || ""}
              className="input"
              type="text"
              placeholder="Enter Student Phone"
            />
          </div>
          <input className="button" type="submit" value="Update Student" />
        </div>
      </form>
    </>
  );
};

export default Form;
