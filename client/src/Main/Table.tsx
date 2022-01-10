import React, { useEffect, useState } from "react";
import { Student } from "../common/types";
import { useNavigate } from "@reach/router";
import MaterialTable from "material-table";
import Book from "../Assets/Icons/address-book.svg";
import Envlop from "../Assets/Icons/envelope.svg";
import BirthYear from "../Assets/Icons/Icon awesome-birthday-cake.svg";
import School from "../Assets/Icons/graduation-hat.svg";
import Gender from "../Assets/Icons/Icon awesome-transgender.svg";
import City from "../Assets/Icons/Icon metro-location.svg";
import Path from "../Assets/Icons/Path 6.svg";
import Logo from "../Assets/Icons/fibonatix-logo.svg";

interface TableProps {
  students?: Student[];
  setStudents?: React.Dispatch<React.SetStateAction<Student[] | undefined>>;
}
const columns = [
  {
    field: "id",
    title: <img src={Path}></img>,
  },
  { field: "name", title: <img src={Book}></img> },
  { field: "gender", title: <img src={Gender}></img> },
  { field: "city", title: <img src={City}></img> },
  { field: "birthYear", title: <img src={BirthYear}></img> },
  { field: "school", title: <img src={School}></img> },
  { field: "mail", title: <img src={Envlop}></img> },
  { field: "phone", title: <img src={Book}></img> },
];

const Table: React.FC<TableProps> = ({ students, setStudents }) => {
  const [selectedRows, setSelectedRows] = useState<Student[]>();
  const navigate = useNavigate();
  const arr = [
    {
      id: 1,
      name: "Loading",
      gender: "Data",
      city: "Please",
      birthYear: "Wait",
      school: "",
      mail: "",
      phone: "",
    },
  ];
  const [rows, setRows] = useState<Student[] | any>(arr);

  useEffect(() => {
    if (students) {
      setRows(students);
    }
  }, [students]);

  const handleDelete = () => {
    if (setStudents && students && selectedRows) {
      const temp = students.filter(
        (row) => !selectedRows.includes(row)
      ) as Student[];

      setStudents(temp);

      localStorage.setItem("students", JSON.stringify(temp));
    }
  };
  return (
    <>
      <MaterialTable
        onRowClick={(event, rowData) => {
          navigate(`students/${rowData?.id}`);
          event?.stopPropagation();
        }}
        columns={columns}
        title={
          <div style={{ color: "#d1b568" }}>
            <img style={{ height: "1rem" }} src={Logo}></img> Students
          </div>
        }
        data={rows}
        onSelectionChange={(rows) =>
          setSelectedRows(rows as unknown as Student[])
        }
        options={{
          selection: true,
        }}
        actions={[
          {
            icon: "delete",
            tooltip: "Delete Selected Rows ",
            onClick: () => handleDelete(),
          },
        ]}
      />
    </>
  );
};

export default Table;
