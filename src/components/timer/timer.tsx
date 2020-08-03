import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import styles from './timer.style'

export interface TimerProps {
    time: number;
}


export function Timer({ time }: TimerProps) {

    // TODO: refact to helper/formatter
    const renderTime = (numberOfSeconds: number) => {
        const timeLeft = {
            minutes: Math.floor((numberOfSeconds / 60) % 60),
            seconds: Math.floor(numberOfSeconds % 60)
        };

        return `${("0" + timeLeft.minutes).slice(-2)}:${("0" + timeLeft.seconds).slice(-2)}`;
    }

    return (
        <View style={styles.progressBar}>
            <Text style={styles.timerText}>{renderTime(time)}</Text>
        </View>
    )
}