import { FC } from "react";
import EnHeader from "../../components/header";
import EnBody from "../../components/body";

import { EnHomeProps } from "./types";

const EnHome: FC<EnHomeProps> = ({ defaultFilter }) => {
  return (
    <>
      <EnHeader defaultFilter={defaultFilter} />
      <EnBody defaultFilter={defaultFilter} />
    </>
  );
};

export default EnHome;
