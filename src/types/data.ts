export enum SportsEventStatus {
  NOT_STARTED = 'NOT_STARTED',
  LIVE = 'LIVE',
  STOPPED = 'STOPPED',
  FINISHED = 'FINISHED',
}

export enum SportsEventPeriod {
  FIRST_HALF = 1,
  SECOND_HALF = 2,
}

export type SportsEventCompetitors = {
  home: string;
  away: string;
};

export type SportsEventScore = {
  home: number;
  away: number;
};

export type SportsEvent = {
  id: string;
  competitors: SportsEventCompetitors;
  status: SportsEventStatus;
  score: SportsEventScore;
  period: SportsEventPeriod;
  scheduled: string;
};
