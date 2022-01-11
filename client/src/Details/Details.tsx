import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Student } from "../common/types";
import Form from "./Form";

interface DetailsProps extends RouteComponentProps {
  studentId?: any;
}

const Details: React.FC<DetailsProps> = ({ studentId }) => {
  // get students from local storage and find the student that clicked
  const students = JSON.parse(
    localStorage.getItem("students") as any
  ) as Student[];
  let student = students.filter((student: Student) => {
    return student.id === studentId;
  });

  return (
    <>
      <div className="details_container">
        <div className="header">Details :</div>
        <Form student={student} students={students} />
      </div>
    </>
  );
};

export default Details;
