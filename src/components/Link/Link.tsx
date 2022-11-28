import React, { useState } from "react";
import cn from "classnames";
import { LinkStyled, TransferStartStyled } from "../../styles/style";
import { useNavigate } from "react-router-dom";

const Link = ({
  type,
  text,
  path,
}: {
  type: string;
  text: string;
  path: string;
}) => {
  const navigate = useNavigate();
  const [start, setStart] = useState<boolean>(false);

  const onClick = () => {
    setStart(true);

    setTimeout(() => {
      navigate(path);
    }, 750);
  };

  const classes = {
    where: type === "where",
    what: type === "what",
    who: type === "who",
  };

  return (
    <>
      <LinkStyled className={cn(classes)} onClick={onClick}>
        {text}
      </LinkStyled>
      <TransferStartStyled className={cn({ ...classes, start })} />
    </>
  );
};

export default Link;
