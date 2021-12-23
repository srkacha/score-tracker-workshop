import React from 'react';
import './StatsItem.scss';

type StatsItemProps = {
  label: string;
  value: number;
};

export const StatsItem = ({ label, value }: StatsItemProps) => {
  return (
    <div className="stats-item">
      <div className={'label'}>{label}</div>
      <div className={'value'}>{value}</div>
    </div>
  );
};
