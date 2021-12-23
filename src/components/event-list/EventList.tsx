import React, { FC } from 'react';
import './EventList.scss';

export const EventList: FC = ({ children }) => {
  return <div className="event-list">{children}</div>;
};
