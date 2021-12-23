import React, { FC, useContext } from 'react';
import { Title } from '../components/title/Title';
import './HeaderContainer.scss';

export const HeaderContainer = () => {
  return (
    <HeaderContainerWrapper>
      <Title value="SCORE TRACKER" />
    </HeaderContainerWrapper>
  );
};

const HeaderContainerWrapper: FC = ({ children }) => {
  return <div className="header-container">{children}</div>;
};
