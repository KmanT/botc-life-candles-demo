import { useRef, useState } from 'react';
import Input from './Input';

const MIN_TO_MS = 60000;
const S_TO_MS = 1000;

export default function Timer () {
  const [timeRemaining, setTimeRemaining] = useState(10 * MIN_TO_MS);
  const [targetTime, setTargetTime] = useState(10 * MIN_TO_MS);
  const timer = useRef(0);
  const minutes = useRef();
  const seconds = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime;
  console.log("timerIsActive", timerIsActive);

  const formattedTime  = `${Math.floor(timeRemaining / MIN_TO_MS)}:${(timeRemaining % MIN_TO_MS).toFixed(0)}`;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    // dialog.current.open();
  }

  function handleSetTimer (event) {
    event.preventDefault();

    console.log(minutes.current.value * MIN_TO_MS);
    console.log(seconds.current.value * S_TO_MS);

    const time = +(minutes.current.value * MIN_TO_MS) +
      +(seconds.current.value * S_TO_MS);
    console.log(time);

    setTargetTime(time);
    setTimeRemaining(time);
    console.log('timer is set');
  }

  function handleStart () {
    timer.current = setInterval(() => {
      setTimeRemaining(prev => prev - 10);
    }, 10);
    console.log('timer has started');
  }

  function handlePause () {
    clearInterval(timer.current);
    console.log('timer has paused');
    console.log('timeRemaining', timeRemaining);
  }

  return <>
    <p>Set a timer for the day.</p>
    <form onSubmit={handleSetTimer}>
      <Input ref={minutes} label="minutes" id="minutes" />
      <Input ref={seconds} label="seconds" id="seconds" />
      <button>Set Timer</button>
    </form>
    {timerIsActive && <p>Timer {formattedTime}</p>}
    {!timerIsActive && <p>TImer has stopped</p>}
    <button
      onClick={handleStart}
    >
      Start
    </button>
    <button
      onClick={handlePause}
    >
      Pause
    </button>
  </>
}
