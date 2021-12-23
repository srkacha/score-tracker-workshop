import { SportsEvent, SportsEventPeriod, SportsEventStatus } from '../types/data';

export const EVENTS: SportsEvent[] = [
  {
    id: '1',
    competitors: {
      home: 'Home 1',
      away: 'Away 1',
    },
    status: SportsEventStatus.NOT_STARTED,
    score: {
      home: 0,
      away: 0,
    },
    period: SportsEventPeriod.FIRST_HALF,
    scheduled: '2021-12-20T15:49:22.205Z',
  },
  {
    id: '2',
    competitors: {
      home: 'Home 2',
      away: 'Away 2',
    },
    status: SportsEventStatus.LIVE,
    score: {
      home: 0,
      away: 1,
    },
    period: SportsEventPeriod.FIRST_HALF,
    scheduled: '2021-12-20T15:49:22.205Z',
  },
  {
    id: '3',
    competitors: {
      home: 'Home 3',
      away: 'Away 3',
    },
    status: SportsEventStatus.LIVE,
    score: {
      home: 0,
      away: 1,
    },
    period: SportsEventPeriod.SECOND_HALF,
    scheduled: '2021-12-20T15:49:22.205Z',
  },
  {
    id: '4',
    competitors: {
      home: 'Home 4',
      away: 'Away 4',
    },
    status: SportsEventStatus.STOPPED,
    score: {
      home: 2,
      away: 1,
    },
    period: SportsEventPeriod.FIRST_HALF,
    scheduled: '2021-12-20T15:49:22.205Z',
  },
  {
    id: '5',
    competitors: {
      home: 'Home 5',
      away: 'Away 5',
    },
    status: SportsEventStatus.FINISHED,
    score: {
      home: 1,
      away: 1,
    },
    period: SportsEventPeriod.SECOND_HALF,
    scheduled: '2021-12-20T15:49:22.205Z',
  },
];
