import React, { FC, useState, useEffect } from 'react';
import { SportsEvent } from '../types/data';
import api from '../api';
import { useMessageHandler } from '../hooks/useMessageHandler';
import { UpdateEventMessages } from '../types/socket';
import { useSocket } from '../hooks/useSocket';

type EventContextData = {
  events: SportsEvent[];
};

const eventContextDataInit = {
  events: [],
};

export const EventsContext = React.createContext<EventContextData>(eventContextDataInit);

export const EventsContextProvider: FC = ({ children }) => {
  const [events, setEvents] = useState<SportsEvent[]>([]);

  const { listen, remove, join, leave } = useSocket();
  const { handleNewEvent, handlePeriodUpdate, handleScoreUpdate, handleStatusUpdate, handleRemoveEvent } =
    useMessageHandler(setEvents, join, leave);

  const initEvents = async () => {
    try {
      const { total = 0, events: eventsData = [] } = await api.events.getEvents();

      // TODO - for each fetched event join into it's own socket room
      // code goes here

      setEvents(eventsData);
    } catch (err) {
      console.error(err);
    }
  };

  const attachListeners = () => {
    listen(UpdateEventMessages.NEW_EVENT, handleNewEvent);
    listen(UpdateEventMessages.PERIOD_UPDATE, handlePeriodUpdate);
    listen(UpdateEventMessages.SCORE_UPDATE, handleScoreUpdate);
    listen(UpdateEventMessages.STATUS_UPDATE, handleStatusUpdate);
    listen(UpdateEventMessages.REMOVE_EVENT, handleRemoveEvent);
  };

  const removeListeners = () => {
    remove(UpdateEventMessages.NEW_EVENT, handleNewEvent);
    remove(UpdateEventMessages.PERIOD_UPDATE, handlePeriodUpdate);
    remove(UpdateEventMessages.SCORE_UPDATE, handleScoreUpdate);
    remove(UpdateEventMessages.STATUS_UPDATE, handleStatusUpdate);
    remove(UpdateEventMessages.REMOVE_EVENT, handleRemoveEvent);
  };

  const initialRoomJoin = () => {
    // TODO - join into 'NEW_EVENT' room
    // code goes here
  };

  useEffect(() => {
    initEvents();
    attachListeners();
    initialRoomJoin();

    return () => {
      removeListeners();
    };
  }, []);

  return <EventsContext.Provider value={{ events: events }}>{children}</EventsContext.Provider>;
};
