import { useEffect, useState } from 'react';
import './index.css'

const Countdown = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear() + 1;
        const difference = +new Date(`01/01/${year}`) - +new Date();

        let timeLeftObject = {};

        if (difference > 0) {
            timeLeftObject = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeftObject;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    return (
        <div className='body'>
            <div className="container">
                <h1 id="headline">LA PÁGINA SE DESBLOQUEA EN:</h1>
                <div id="countdown">
                    <ul>
                        <li><span id="days">{timeLeft.days}</span>dia(s)</li>
                        <li><span id="hours">{timeLeft.hours}</span>hora(s)</li>
                        <li><span id="minutes">{timeLeft.minutes}</span>minuto(s)</li>
                        <li><span id="seconds">{timeLeft.seconds}</span>segundo(s)</li>
                    </ul>
                </div>
                <div id="content" className="emoji">
                    <span>🥳</span>
                    <span>🎉</span>
                    <span>🎂</span>
                </div>
            </div>
        </div>
    )
}

export default Countdown;