import React from "react";
import Transfer from "../components/Transfer/Transfer";
import { TitleStyledPages } from "../styles/style";

const Where = () => {
  return (
    <>
      <Transfer type="where" />
      <TitleStyledPages>
        Where?
      </TitleStyledPages>
    </>
  );
};

export default Where;
