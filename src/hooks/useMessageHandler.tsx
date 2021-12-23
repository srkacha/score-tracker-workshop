import { Dispatch, SetStateAction } from 'react';
import { SportsEvent } from '../types/data';
import {
  NewEventMessageData,
  ScoreUpdateMessageData,
  PeriodUpdateMessageData,
  StatusUpdateMessageData,
  RemoveEventMessageData,
} from '../types/socket';

export const useMessageHandler = (
  updateEvents: Dispatch<SetStateAction<SportsEvent[]>>,
  join: (value: string) => void,
  leave: (value: string) => void,
) => {
  const handleNewEvent = (data: NewEventMessageData) => {
    updateEvents((events: SportsEvent[]) => [data, ...events]);
    // TODO - join into socket room for the newly arrived event
    // code goes here
  };

  const handleScoreUpdate = (data: ScoreUpdateMessageData) => {
    updateEvents((events) => events.map((event) => (event.id === data.id ? { ...event, score: data.score } : event)));
  };

  const handlePeriodUpdate = (data: PeriodUpdateMessageData) => {
    // TODO - Implement handler function based on handleScoreUpdate implementation
    // code goes here
  };

  const handleStatusUpdate = (data: StatusUpdateMessageData) => {
    // TODO - Implement handler function based on handleScoreUpdate implementation
    // code goes here
  };

  const handleRemoveEvent = (data: RemoveEventMessageData) => {
    // TODO - filter out the removed event from events array, update the events state and leave the socket room for the removed event
    // code goes here
  };

  return {
    handleNewEvent,
    handleScoreUpdate,
    handlePeriodUpdate,
    handleStatusUpdate,
    handleRemoveEvent,
  };
};
