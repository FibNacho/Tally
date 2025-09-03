import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { GrRefresh } from 'react-icons/gr';

function PomodoroTimer() {
  const defaultTime = 1500000;
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(defaultTime);
  const [startTime, setStartTime] = useState(0);
  const intervalRef = useRef(0);

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(() => {
        setTimeLeft(() => defaultTime - (Date.now() - startTime));
      }, 1);
      intervalRef.current = intervalId;
    }
  }, [isPlaying]);

  function handleStart() {
    setIsPlaying((s) => !s);
    setStartTime(() => Date.now());
  }

  function handleStop() {
    setIsPlaying((s) => !s);
    clearInterval(intervalRef.current);
  }

  function handleRestart() {
    clearInterval(intervalRef.current);
    setIsPlaying(() => false);
    setTimeLeft(defaultTime);
  }

  function convertMilliseconds(milliseconds: number) {
    return {
      seconds: Math.floor((milliseconds / 1000) % 60),
      minutes: Math.floor(milliseconds / 1000 / 60),
    };
  }

  const displayTime = convertMilliseconds(timeLeft);

  return (
    <>
      <span>{`${
        displayTime.minutes < 10 ? `0${displayTime.minutes}` : displayTime.minutes
      }:${
        displayTime.seconds < 10 ? `0${displayTime.seconds}` : displayTime.seconds
      }`}</span>
      <button onClick={isPlaying ? handleStop : handleStart}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button onClick={handleRestart}>
        <GrRefresh></GrRefresh>
      </button>
    </>
  );
}

export default PomodoroTimer;
