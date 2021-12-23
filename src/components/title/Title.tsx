import React from 'react';
import './Title.scss';

type TitleProps = {
  value: string;
};

export const Title = ({ value }: TitleProps) => {
  return <div className={'title'}>{value}</div>;
};
