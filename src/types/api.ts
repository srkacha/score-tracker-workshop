import { SportsEvent } from './data';

export type EventsPayload = {
  events: SportsEvent[];
  total?: number;
};
