import React from "react";
import ButtonIcon from "../components/Button/Button";
import CircleIcon from "../components/Circle/Circle";
import LanguageIcon from "../components/Language/Language";
import Link from "../components/Link/Link";
import LogoIcon from "../components/Logo/Logo";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import {
  ContentStyled,
  LogoWrapStyled,
  LanguageWrapStyled,
  LanguageListStyled,
  LanguageItemStyled,
  CircleWrapStyled,
  ButtonWrapStyled,
  BurgerStyled,
  TextWrapStyled,
} from "../styles/style";

const MainPage = () => {
  return (
    <ContentStyled>
      <LogoWrapStyled>
        <LogoIcon />
      </LogoWrapStyled>

      <LanguageWrapStyled>
        <LanguageIcon />
        <LanguageListStyled className="list">
          <LanguageItemStyled className="item">UA</LanguageItemStyled>
          <LanguageItemStyled className="item">EN</LanguageItemStyled>
        </LanguageListStyled>
      </LanguageWrapStyled>

      <BurgerStyled />

      <Title />
      <CircleWrapStyled>
        <CircleIcon />
        <ButtonWrapStyled>
          <ButtonIcon />
        </ButtonWrapStyled>
      </CircleWrapStyled>

      <TextWrapStyled className="right">
        <Text />
      </TextWrapStyled>

      <TextWrapStyled className="left">
        <Text />
      </TextWrapStyled>

      <Link type="where" text="Where?" path="/where" />
      <Link type="what" text="What?" path="/what" />
      <Link type="who" text="Who?" path="/who" />
    </ContentStyled>
  );
};

export default MainPage;
