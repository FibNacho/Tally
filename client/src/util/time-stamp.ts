export interface timeStamp {
  hour: number;
  minute: number;
  second: number;
  milliSecond: number;
  month: number;
  day: number;
  year: number;
  timeNow: number;
}

export interface timeDiff {
  hours: number;
  minutes: number;
  seconds: number;
}

export function timeStamp(): timeStamp {
  const date = new Date();
  const timeNow = Date.now();

  const time: timeStamp = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    milliSecond: date.getMilliseconds(),
    month: date.getMilliseconds(),
    day: date.getDay(),
    year: date.getFullYear(),
    timeNow,
  };

  return time;
}

export function timeElapsed(startTime: timeStamp, endTime: timeStamp): timeDiff {
  const timeDiffInMilliseconds = endTime.timeNow - startTime.timeNow;
  const calculateHours = Math.floor(timeDiffInMilliseconds / 1000 / 60 / 60);
  const calculateMinutes = Math.floor(
    (timeDiffInMilliseconds - calculateHours * 60 * 60 * 1000) / 1000 / 60
  );
  const calculateSeconds = Math.floor(
    (timeDiffInMilliseconds - calculateMinutes * 60 * 1000) / 1000
  );

  const timeDiff: timeDiff = {
    hours: calculateHours,
    minutes: calculateMinutes,
    seconds: calculateSeconds,
  };

  return timeDiff;
}
