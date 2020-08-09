import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './timer-actions.style';

interface TimerActionsProps {
    isPlaying: boolean,
    timeInSeconds: number,
    onPlayCallback(): void,
    onPauseCallback(): void,
    onStopCallback(): void;
}

export function TimerActions({ isPlaying, timeInSeconds, onPlayCallback, onPauseCallback, onStopCallback }: TimerActionsProps) {

    const renderPlaying = () => {
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

    const renderStopped = () => {
        return (
            <TouchableOpacity style={styles.actionButton} onPress={onPlayCallback}>
                <Text style={styles.actionButtonText}>play</Text>
            </TouchableOpacity>
        )
    }

    const renderPaused = () => {
        return (
            <>
                <TouchableOpacity style={styles.actionButton} onPress={onStopCallback}>
                    <Text style={styles.actionButtonText}>stop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={onPlayCallback}>
                    <Text style={styles.actionButtonText}>play</Text>
                </TouchableOpacity>
            </>
        )
    }

    const renderButtons = () => {
        if (isPlaying) {
            return renderPlaying();
        }

        if (timeInSeconds > 0) {
            return renderPaused();
        }
        return renderStopped();
    }

    return (
        <View style={styles.container}>
            {renderButtons()}
        </View>
    )
}

