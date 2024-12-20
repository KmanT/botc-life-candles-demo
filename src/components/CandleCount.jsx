import { useRef } from 'react';

export default function CandleCount ({ onCountChange }) {
    const count = useRef()

    return <form id='candle-form' className='card' onSubmit={() => onCountChange(count.current.value)}>
        <label htmlFor="candle-count">Number of candles</label>
        <input ref={count} id="candle-count" type="number" />
        <button >Set Candle Count</button>
    </form>

}