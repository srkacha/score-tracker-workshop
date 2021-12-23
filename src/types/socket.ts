import { SportsEvent, SportsEventScore, SportsEventPeriod, SportsEventStatus } from './data';

export enum UpdateEventMessages {
  NEW_EVENT = 'NEW_EVENT',
  SCORE_UPDATE = 'SCORE_UPDATE',
  PERIOD_UPDATE = 'PERIOD_UPDATE',
  STATUS_UPDATE = 'STATUS_UPDATE',
  REMOVE_EVENT = 'REMOVE_EVENT',
}

export type NewEventMessageData = SportsEvent;

export type ScoreUpdateMessageData = {
  id: string;
  score: SportsEventScore;
};

export type PeriodUpdateMessageData = {
  id: string;
  period: SportsEventPeriod;
};

export type StatusUpdateMessageData = {
  id: string;
  status: SportsEventStatus;
};

export type RemoveEventMessageData = {
  id: string;
};
