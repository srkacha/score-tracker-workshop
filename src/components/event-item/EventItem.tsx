import React, { useMemo } from 'react';
import { SportsEvent, SportsEventPeriod, SportsEventStatus } from '../../types/data';
import './EventItem.scss';
import classnames from 'classnames';
import dateformat from 'dateformat';
import { mdiAlertOctagon, mdiCheckboxMarkedCircle, mdiClock, mdiPlayCircle } from '@mdi/js';
import Icon from '@mdi/react';

const EVENT_PERIOD_TEXT_MAP: Record<SportsEventPeriod, string> = {
  [SportsEventPeriod.FIRST_HALF]: 'First Half',
  [SportsEventPeriod.SECOND_HALF]: 'Second Half',
};

const EVENT_STATUS_ICON_MAP: Record<SportsEventStatus, string> = {
  [SportsEventStatus.NOT_STARTED]: mdiClock,
  [SportsEventStatus.LIVE]: mdiPlayCircle,
  [SportsEventStatus.STOPPED]: mdiAlertOctagon,
  [SportsEventStatus.FINISHED]: mdiCheckboxMarkedCircle,
};

type EventItemProps = {
  event: SportsEvent;
};

export const EventItem = ({ event }: EventItemProps) => {
  const wrapperClassnames = classnames({
    'event-item-wrapper': true,
    live: event.status === SportsEventStatus.LIVE,
    stopped: event.status === SportsEventStatus.STOPPED,
    finished: event.status === SportsEventStatus.FINISHED,
  });

  const statusIconClassnames = classnames({
    'status-icon': true,
    live: event.status === SportsEventStatus.LIVE,
    stopped: event.status === SportsEventStatus.STOPPED,
    finished: event.status === SportsEventStatus.FINISHED,
  });

  const periodValue = useMemo(() => {
    return event.status === SportsEventStatus.NOT_STARTED
      ? dateformat(event.scheduled, 'HH:MM')
      : EVENT_PERIOD_TEXT_MAP[event.period];
  }, [event]);

  return (
    <div className={wrapperClassnames}>
      <div className="competitors">
        <div className="competitor">{event.competitors.home}</div>
        <div>{`-`}</div>
        <div className="competitor">{event.competitors.away}</div>
      </div>
      <div className="period">{periodValue}</div>
      <div className="status">
        <Icon className={statusIconClassnames} path={EVENT_STATUS_ICON_MAP[event.status]} />
      </div>
      <div className="scores">
        <div className="single-score">{event.score.home}</div>
        <div>{`:`}</div>
        <div className="single-score">{event.score.away}</div>
      </div>
    </div>
  );
};
