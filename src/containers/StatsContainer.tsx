import React, { FC, useContext } from 'react';
import { StatsItem } from '../components/stats-item/StatsItem';
import { Stats } from '../components/stats/Stats';
import { EventsContext } from '../context/EventsContext';
import './StatsContainer.scss';

export const StatsContainer = () => {
  // TODO - using context API, import events array and totalEvents values from EventsContext
  //code goes here

  // TODO - set totalEvents value to one provided by the context
  const totalEvents = 0;

  // TODO - calculate the number of live events by counting the number of those in the events array
  const liveEvents = 0;

  // TODO - calculate the number of all events that aren't running at the moment (includes not started, stopped and finished events)
  const notRunningEvents = 0;

  return (
    <StatsContainerWrapper>
      <Stats>
        <StatsItem label="Total:" value={totalEvents} />
        <StatsItem label="Live:" value={liveEvents} />
        <StatsItem label="Not running:" value={notRunningEvents} />
      </Stats>
    </StatsContainerWrapper>
  );
};

const StatsContainerWrapper: FC = ({ children }) => {
  return <div className={`stats-container-wrapper`}>{children}</div>;
};
