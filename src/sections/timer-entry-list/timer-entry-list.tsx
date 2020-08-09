import React from 'react';
import { ScrollView } from 'react-native';

import { TimerEntry } from './components';
import styles from './timer-entry-list.style';

interface TimerEntryListProps {
    entries: Entry[]
}

export interface Entry {
    timeInSeconds: number;
}

export const TimerEntryList = ({ entries }: TimerEntryListProps) => {

    const renderEntryList = () => {
        return entries.map((entry, key) => (
            <TimerEntry timeInSeconds={entry.timeInSeconds} key={key}/>
        ));
    }

    return (
        <ScrollView style={styles.container}>
            {renderEntryList()}
        </ScrollView>
    );
}