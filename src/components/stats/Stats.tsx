import React, { FC } from 'react';
import './Stats.scss';

export const Stats: FC = ({ children }) => {
  return <div className="stats">{children}</div>;
};
