import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatTime } from '../../../../utils';
import { Entry } from '../../timer-entry-list';
import styles from './timer-entry.style';

export const TimerEntry = ({ timeInSeconds }: Entry) => {
    return (
        <View style={styles.entry}>
            <Icon name="schedule" size={36} color='#fff' />
            <Text style={styles.entryText}>{formatTime(timeInSeconds)}</Text>
        </View>
    )
}
