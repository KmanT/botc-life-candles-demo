import { useState } from 'react'
import CandleCount from './components/CandleCount';
import SemiCircle from './components/SemiCircle'
import LifeButton from './components/LifeButton';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [candlesCount, setCandleCount] = useState(15);

  function handleSetCandlesCount (count) {
    setCandleCount(+count);
  }


  const buttons = [...Array(candlesCount).keys()]
  .map(v => {
    console.log(v);
    return <LifeButton key={v} idx={v}/>
  });

  return (
    <main>
      <header>
        <h1>Blood On The Clocktower</h1>
        <CandleCount onCountChange={handleSetCandlesCount}/>
      </header>
      <div className="flex-container">
        <SemiCircle items={buttons}/>
      </div>
    </main>
  )
}

export default App
