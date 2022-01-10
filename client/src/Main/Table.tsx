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
import A from "../Assets/Avatar/Ellipse 11.png";
import B from "../Assets/Avatar/Ellipse 10.png";
import C from "../Assets/Avatar/Ellipse 12.png";
import D from "../Assets/Avatar/Ellipse 13.png";
import E from "../Assets/Avatar/Ellipse 14.png";
import F from "../Assets/Avatar/Ellipse 15.png";

interface TableProps {
  students?: Student[];
  setStudents?: React.Dispatch<React.SetStateAction<Student[] | undefined>>;
}
const getAvatar = (str: string) => {
  if (str == "A") {
    return A;
  }
  if (str == "B") {
    return B;
  }
  if (str == "C") {
    return C;
  }
  if (str == "D") {
    return D;
  }
  if (str == "E") {
    return E;
  }
  if (str == "F") {
    return F;
  }
};
const columns = [
  {
    field: "img",
    title: <img src={Path}></img>,
    render: (rowData: any) => (
      <img
        src={getAvatar(rowData.img)}
        style={{ width: 40, borderRadius: "50%" }}
      />
    ),
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

      for (let [i, el] of temp.entries()) {
        el.id = (i + 1).toString();
      }

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
