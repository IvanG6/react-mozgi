import React, { useRef } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { TitleStyled } from "../../styles/style";

const Title = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mousePosition = useMousePosition();
  const prefersReducedMotion = usePrefersReducedMotion();

  const x = mousePosition.x || 0;
  const y = mousePosition.y || 0;

  const centerX =
    (titleRef.current?.offsetLeft || 0) +
    (titleRef.current?.offsetWidth || 0) / 2;
  const centerY =
    (titleRef.current?.offsetTop || 0) +
    (titleRef.current?.offsetHeight || 0) / 2;

  const transform: string = !prefersReducedMotion
    ? `translateY(${y < centerY ? -10 : y > centerY ? 10 : 0}px)
      translateX(${x < centerX ? -10 : x > centerX ? 10 : 0}px)`
    : "";

  return (
    <TitleStyled
      ref={titleRef}
      style={{
        transform,
      }}
    >
      FULL-CYCLE
      <br />
      EVENT AGENCY
    </TitleStyled>
  );
};

export default Title;
