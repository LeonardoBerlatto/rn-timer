import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './timer-actions.style';

interface TimerActionsProps {
    isPlaying: boolean,
    onPlayCallback(): void,
    onPauseCallback(): void,
    onStopCallback(): void;
}

export function TimerActions({ isPlaying, onPlayCallback, onPauseCallback, onStopCallback }: TimerActionsProps) {


    const renderButtons = () => {
        if (!isPlaying) {
            return (
                <>
                    <TouchableOpacity style={styles.actionButton} onPress={onStopCallback}>
                        <Text style={styles.actionButtonText}>Stop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} onPress={onPauseCallback}>
                        <Text style={styles.actionButtonText}>pause</Text>
                    </TouchableOpacity>
                </>
            )
        }
        return <TouchableOpacity style={styles.actionButton} onPress={onPlayCallback}>
            <Text style={styles.actionButtonText}>play</Text>
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            {renderButtons()}
        </View>
    )
}

