import React, { FC, useContext } from 'react';
import { EventItem } from '../components/event-item/EventItem';
import { EventList } from '../components/event-list/EventList';
import { EventsContext } from '../context/EventsContext';
import './EventsContainer.scss';

export const EventsContainer = () => {
  const { events } = useContext(EventsContext);

  return (
    <EventsListContainerWrapper>
      <EventList>
        {events.map((event) => {
          return <EventItem key={event.id} event={event} />;
        })}
      </EventList>
    </EventsListContainerWrapper>
  );
};

const EventsListContainerWrapper: FC = ({ children }) => {
  return <div className="container">{children}</div>;
};
