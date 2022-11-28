import React, { useEffect, useState } from "react";
import cn from "classnames";
import { TransferFinishStyled } from "../../styles/style";

const Transfer = ({ type }: { type: string }) => {
  const [finish, setFinish] = useState<boolean>(false);

  useEffect(() => {
    setFinish(true);
  }, []);

  const classes = {
    where: type === "where",
    what: type === "what",
    who: type === "who",
    finish,
  };

  return <TransferFinishStyled className={cn(classes)} />;
};

export default Transfer;
