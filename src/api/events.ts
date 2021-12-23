import { EventsPayload } from '../types/api';
import { http } from './http';

export const events = {
  getEvents: async (): Promise<EventsPayload> => {
    const { data } = await http.get('/events');
    return data;
  },
};
