import {FC, useEffect, useRef, useState} from 'react';
import {Colors} from "../models/Colors.ts";
import styles from "../styles/Board.module.css";

interface TimerProps {
    startTime: number;
    side: Colors;
    sideToMove: Colors;
}

const Timer: FC<TimerProps> = ({startTime, side, sideToMove}) => {
    const [time, setTime] = useState(startTime);
    const timer = useRef<null | number>(null);

    useEffect(() => startTimer(), [sideToMove]);

    const startTimer = () => {
        if (timer.current) {
            clearInterval(timer.current);
        }

        if (side === sideToMove) {
            timer.current = setInterval(decrementTime, 100);
        }
    }

    const decrementTime = () => {
        setTime(prev => prev - 0.1);
    }

    const getFormatedTime = (time: number) => {
        time = Math.ceil(time);
        const seconds = time % 60;
        time = (time - seconds) / 60;
        const minutes = time % 60;
        const hours = (time - minutes) / 60;
        return (hours !== 0 ? hours.toString().padStart(2, '0') + ':' : "")
            + minutes.toString().padStart(2, '0')
            + ':' + seconds.toString().padStart(2, '0');
    }


    return (
        <div className={styles.timer}>
            <p>{getFormatedTime(time)}</p>
        </div>
    );
};

export default Timer;