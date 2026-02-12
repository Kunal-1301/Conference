import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
                hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
                minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
                seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
            };
        } else {
            timeLeft = {
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00"
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="footerTimer">
            <div className="timerElement">
                <span>{timeLeft.days}</span>
                <span>DAYS</span>
            </div>

            <div className="seperator"></div>

            <div className="timerElement">
                <span>{timeLeft.hours}</span>
                <span>HOURS</span>
            </div>

            <div className="seperator"></div>
            
            <div className="timerElement">
                <span>{timeLeft.minutes}</span>
                <span>MINUTES</span>
            </div>

            <div className="seperator"></div>

            <div className="timerElement">
                <span>{timeLeft.seconds}</span>
                <span>SECONDS</span>
            </div>
        </div>
    );
};

export default CountdownTimer;
