import { RouteComponentProps } from "@reach/router";
import React from "react";
import A from "../Assets/Avatar/Ellipse 11.png";
import B from "../Assets/Avatar/Ellipse 10.png";
import C from "../Assets/Avatar/Ellipse 12.png";
import D from "../Assets/Avatar/Ellipse 13.png";
import E from "../Assets/Avatar/Ellipse 14.png";
import F from "../Assets/Avatar/Ellipse 15.png";

interface AvaterProps extends RouteComponentProps {
  imgString?: string | undefined;
}
// get string of student and return avatar
const Avater: React.FC<AvaterProps> = ({ imgString }) => {
  const getAvatar = (str: string | undefined) => {
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

  return (
    <>
      <img
        src={getAvatar(imgString)}
        style={{ width: 40, borderRadius: "50%" }}
      />
    </>
  );
};

export default Avater;
