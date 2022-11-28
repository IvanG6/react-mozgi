import React from "react";
import Transfer from "../components/Transfer/Transfer";
import { TitleStyledPages } from "../styles/style";

const Who = () => {
  return (
    <>
      <Transfer type="who" />
      <TitleStyledPages>
        Who?
      </TitleStyledPages>
    </>
  );
};

export default Who;
