import React, {createContext, useState} from 'react';
import { useStopwatch } from 'react-timer-hook';

export const GameStateContext = createContext();

export default ({children}) =>{
    const currentAnswerTimer = useStopwatch();
    const totalAnswerTimer = useStopwatch();

    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [avgTime, setAvgTime] = useState('00:00');
    const [lastAnswer, setLastAnswer] = useState('00:00');
    const [crtElapsedTime, setCrtElapsedTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    const increaseCorrect = () =>{
       setCorrect(correct + 1);
    };

    const increaseIncorrect = () =>{
        setIncorrect(incorrect + 1);
    };

    const startTimer = () =>{
        if(!currentAnswerTimer.isRunning) currentAnswerTimer.start();
        if(!totalAnswerTimer.isRunning) totalAnswerTimer.start();
    };

    const resetTimer = () =>{
        let totalTimeInSeconds = totalAnswerTimer.minutes * 60 + totalAnswerTimer.seconds;
        let avgTimeInSeconds = Math.round(totalTimeInSeconds / (correct + incorrect));
        let min = Math.floor(avgTimeInSeconds / 60);
        let sec = avgTimeInSeconds - min * 60;
        setAvgTime(`${min}:${sec}`);
        setLastAnswer(`${currentAnswerTimer.minutes}:${currentAnswerTimer.seconds}`);
        currentAnswerTimer.reset();
        currentAnswerTimer.start();
    };

    return (
        <GameStateContext.Provider value={{
            correct,
            increaseCorrect,
            incorrect,
            increaseIncorrect,
            avgTime,
            lastAnswer,
            crtElapsedTime,
            totalTime,
            startTimer,
            resetTimer,
            totalAnswerTimer,
            currentAnswerTimer
        }}>
            {children}
        </GameStateContext.Provider>
    );
}