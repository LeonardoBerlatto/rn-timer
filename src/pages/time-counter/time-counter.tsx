import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Timer } from '../../components';
import { TimerActions } from '../../sections';
import { Entry, TimerEntryList } from '../../sections/timer-entry-list/timer-entry-list';
import styles from './time-counter.style';

export function TimeCounter() {
    const [timeInSeconds, setTimeInSeconds] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false);
    const [entries, setEntries] = useState([] as Entry[]);

    useEffect(() => {
        let interval = 0;
        if (isPlaying) {
            interval = setInterval(() => {
                setTimeInSeconds(timeInSeconds => timeInSeconds + 1);
            }, 1000);
        } else if (!isPlaying && timeInSeconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying, timeInSeconds]);

    const play = () => {
        setIsPlaying(true);
    }

    const pause = () => {
        setIsPlaying(false);
    }

    const stop = () => {
        setEntries([
            ...entries,
            { timeInSeconds }
        ])
        setTimeInSeconds(0);
        setIsPlaying(false);
    }

    return (
        <View style={styles.container}>
            <Timer time={timeInSeconds} />
            <TimerActions
                timeInSeconds={timeInSeconds}
                onPlayCallback={play}
                onPauseCallback={pause}
                onStopCallback={stop}
                isPlaying={isPlaying} />
            <TimerEntryList entries={entries} />
        </View>
    );
}

