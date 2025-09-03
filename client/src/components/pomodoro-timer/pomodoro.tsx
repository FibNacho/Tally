import { useState } from 'react';
import { timeStamp, timeElapsed } from '../../util/time-stamp';
import { type timeStampObj } from '../../util/time-stamp';

function PomodoroTimer() {
  const defaultTimeStamp: timeStampObj = {
    hour: 0,
    minute: 0,
    second: 0,
    milliSecond: 0,
    month: 0,
    day: 0,
    year: 0,
    timeNow: 0,
  };

  const [currTime, setCurrTIme] = useState(defaultTimeStamp);

  return (
    <>
      <button
        onClick={() => {
          setCurrTIme(timeStamp());
        }}
      >
        <span>{` Hour:${currTime.hour} Minute:${currTime.minute} Second:${currTime.second}`}</span>
      </button>
    </>
  );
}

export default PomodoroTimer;
