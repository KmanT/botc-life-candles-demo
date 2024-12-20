import { useState } from "react";

export default function LifeButton ({ idx }) {
    const [life, setLife] = useState({
        alive: true,
        ghostVote: true,
    });

    function handleLife () {
        setLife(prev => {
            const newLife = {...prev};
            if (prev.alive && prev.ghostVote) {
                newLife.alive = false;
            }
            else if (!prev.alive && prev.ghostVote) {
                newLife.ghostVote = false;
            }
            else {
                newLife.alive = true;
                newLife.ghostVote = true;
            }

            return newLife;
        });
    }

    const buttonClass = (life.alive && life.ghostVote) ? 'alive' :
        ((!life.alive && life.ghostVote)) ? 'ghost' : 'dead';

    return <button
        className={`life-button ${buttonClass}`}
        onClick={handleLife}
    >
        {idx}
    </button>
}