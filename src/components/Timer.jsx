import { useRef, useState } from 'react';
import Input from './Input';

const MIN_TO_MS = 60000;
const S_TO_MS = 1000;

export default function Timer ({}) {
  const [timeRemaing, setTimeRemaining] = useState(10 * MIN_TO_MS);
  const timer = useRef();
  const minutes = useRef();
  const seconds = useRef();

  const timerIsActive = timeRemaing > 0 && timeRemaing < targetTime * 1000;

  function handleSetTimer (event) {
    event.preventDefault();

    const time = (+minutes.current.value * MIN_TO_MS) +
      (+seconds * S_TO_MS);

    setTimeRemaining(time);
  }

  function handleStart () {

  }

  function handlePause () {

  }

  return <>
    <p>Set a timer for the day.</p>
    <form onSubmit={handleSetTimer}>
      <Input ref={minutes} label="minutes" id="minutes" />
      <Input ref={seconds} label="seconds" id="seconds" />
      <button>Set Timer</button>
    </form>
    <button>Start</button>
    <button>Pause</button>
  </>
}
