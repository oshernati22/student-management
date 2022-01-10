import { RouteComponentProps } from "@reach/router";
import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import Api from "../common/api";
import { Student } from "../common/types";
import Table from "./Table";

interface MainProps extends RouteComponentProps {}

const Main: React.FC<MainProps> = () => {
  const [students, setStudents] = useState<Student[]>();
  useEffect(() => {
    if (!localStorage.getItem("students")) {
      Api.init();
      const fetchStudents = async () => {
        Api.init();
        const studentsList = await Api.get<Student[]>();
        setStudents(studentsList.data);
        localStorage.setItem("students", JSON.stringify(studentsList.data));
      };
      fetchStudents();
    } else {
      setStudents(
        JSON.parse(localStorage.getItem("students") as string) as Student[]
      );
    }
  }, [setStudents]);

  return (
    <>
      <Table students={students} setStudents={(value) => setStudents(value)} />
    </>
  );
};

export default Main;
