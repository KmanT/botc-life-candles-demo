import { useRef } from 'react';

export default function CandleCount ({ onCountChange }) {
    const count = useRef()

    function handleSubmit (event) {
        event.preventDefault();

        onCountChange(count.current.value);
    }

    return <form id='candle-form' className='card' onSubmit={handleSubmit}>
        <label htmlFor="candle-count">Number of candles</label>
        <input ref={count} id="candle-count" type="number" />
        <button >Set Candle Count</button>
    </form>

}