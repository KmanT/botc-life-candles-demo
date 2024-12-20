import { useRef } from 'react';

import Input from './Input';

export default function CandleCount ({ onCountChange }) {
    const count = useRef()

    function handleSubmit (event) {
        event.preventDefault();

        onCountChange(count.current.value);
    }

    return <form id='candle-form' className='card' onSubmit={handleSubmit}>
        <Input 
            id={"candle-count"}
            ref={count}
            type="number"
            label="Number of candles"
        />
        <button >Set Candle Count</button>
    </form>

}