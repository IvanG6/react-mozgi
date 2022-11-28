import styled, { keyframes } from "styled-components";

export const ContentStyled = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-right: 40px;
  padding-left: 40px;
  background-color: #bebebe;
  overflow: hidden;
`;

const logo = keyframes`
  0% {
    height: 0;
  }

  100% {
    height: 46px;
  }
`;

export const LogoWrapStyled = styled.div`
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-end;
  height: 46px;

  & svg {
    animation: ${logo} 1s linear;
  }
`;

export const LanguageWrapStyled = styled.div`
  position: absolute;
  top: 28px;
  left: 24px;
  cursor: pointer;

  &:hover .item {
    display: block;
  }
`;

export const LanguageListStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  display: flex;
  transform: translateY(-50%);
`;

const visible1 = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const visible2 = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const LanguageItemStyled = styled.button`
  display: none;
  border: none;
  background: none;
  font-family: "Grtsk Giga", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;

  &.item {
    &:nth-child(1) {
      animation-name: ${visible1};
      animation-duration: 1s;
    }

    &:nth-child(2) {
      animation-name: ${visible2};
      animation-duration: 2s;
    }
  }
`;

export const BurgerStyled = styled.button`
  position: absolute;
  top: 28px;
  right: 20px;
  display: none;
  width: 22px;
  height: 22px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
    transition: all 0.3s ease;
  }

  &::before {
    top: 6px;
  }

  &::after {
    bottom: 6px;
  }

  &:hover {
    &::before {
      left: 20%;
    }

    &::after {
      left: -20%;
    }
  }

  @media (max-width: 575px) {
    display: block;
  }
`;

export const TitleStyled = styled.h1`
  position: relative;
  z-index: 2;
  font-family: "Grtsk Giga", sans-serif;
  font-weight: 700;
  font-size: 82px;
  line-height: 90px;
  text-align: center;
  text-transform: uppercase;
  color: #373737;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    font-size: 58px;
    line-height: 64px;
  }

  @media (max-width: 575px) {
    line-height: 37px;
    font-size: 34px;
  }
`;

export const TitleStyledPages = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  font-family: "Grtsk Giga", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 82px;
  line-height: 110%;
  text-align: center;
  text-transform: uppercase;

  color: #373737;
`;

export const CircleWrapStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;

  transform: translate(-50%, -50%);

  & svg {
    @media (max-width: 1024px) {
      width: 634px;
      height: 634px;
    }

    @media (max-width: 575px) {
      width: 375px;
      height: 375px;
    }
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(-360deg);
  }
`;

export const ButtonWrapStyled = styled.button`
  position: absolute;
  right: 70px;
  bottom: 70px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    animation: ${rotate} 5s linear infinite;
  }

  @media (max-width: 1024px) {
    right: 80px;
    bottom: 80px;
  }
  @media (max-width: 575px) {
    right: 40px;
    bottom: 40px;
  }

  & svg {
    @media (max-width: 1024px) {
      max-width: 100px;
      max-height: 100px;
    }
    @media (max-width: 575px) {
      max-width: 75px;
      max-height: 75px;
    }
  }
`;

export const LinkStyled = styled.a`
  position: absolute;
  font-family: "Grtsk Giga", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-decoration: none;
  color: #373737;
  transition: all 0.3s ease;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #fff;

    &::before {
      width: 100%;
    }
  }

  &.where {
    top: 50%;
    left: 0;
    transform: rotate(-90deg) translateX(50%);
  }

  &.who {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.what {
    top: 50%;
    right: 0;
    transform: rotate(90deg) translateX(-50%);
  }

  @media (max-width: 575px) {
    display: none;
  }
`;

export const TransferStartStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 203, 70);
  transition: all 0.75s ease;
  z-index: 100;

  &.where {
    transform: translateX(-100%);

    &.start {
      transform: translateX(0);
    }
  }

  &.what {
    transform: translateX(100%);

    &.start {
      transform: translateX(0);
    }
  }

  &.who {
    transform: translateY(100%);

    &.start {
      transform: translateY(0);
    }
  }
`;

export const TransferFinishStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 203, 70);
  transition: all 0.75s ease;
  z-index: 100;

  &.where {
    &.finish {
      transform: translateX(100%);
    }
  }

  &.what {
    &.finish {
      transform: translateX(-100%);
    }
  }

  &.who {
    &.finish {
      transform: translateY(-100%);
    }
  }
`;

const slide = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
`;

export const TextWrapStyled = styled.h2`
  position: absolute;
  width: 100%;

  &.right {
    transform: rotate(-30deg);


    @media(max-width: 1024px) {
      transform: rotate(-53deg);
    }
    @media(max-width: 575px) {
      transform: rotate(-62deg);
    }
  }

  &.left {
    transform: rotate(150deg);

    @media(max-width: 1024px) {
      transform: rotate(127deg);
    }
    @media(max-width: 575px) {
      transform: rotate(118deg);
    }
  }
`;

export const TextStyled = styled.p`
  position: absolute;
  top: -100%;
  font-family: "Grtsk Giga", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 52px;
  line-height: 60px;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.1;
  color: #bebebe;
  text-shadow: 1px 1px #373737;
  animation: ${slide} 15s linear infinite;

  @media (max-width: 1024px) {
    font-size: 42px;
    line-height: 50px;
  }
  @media (max-width: 575px) {
    font-size: 28px;
    line-height: 36px;
  }
`;
