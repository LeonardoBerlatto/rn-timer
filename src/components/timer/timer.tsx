import React from 'react';
import { Text, View } from 'react-native';

import { formatTime } from '../../utils';
import styles from './timer.style';

export interface TimerProps {
    time: number;
}

export function Timer({ time }: TimerProps) {

    return (
        <View style={styles.progressBar}>
            <Text style={styles.timerText}>{formatTime(time)}</Text>
        </View>
    )
}