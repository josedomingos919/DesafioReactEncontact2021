import { FC } from "react";
import EnHeader from "../../components/header";
import { EnHomeProps } from "./types";

const EnHome: FC<EnHomeProps> = ({ defaultFilter }) => {
  return (
    <>
      <EnHeader defaultFilter={defaultFilter} />
    </>
  );
};

export default EnHome;
