import { registerRootComponent } from 'expo';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Timer } from './components';
import { TimerActions } from './sections';

export default function App() {
  const [timeInSeconds, setTimeInSeconds] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false);

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

  const pause = () => {
    setIsPlaying(false);
  }

  const stop = () => {
    setTimeInSeconds(0);
    setIsPlaying(false);
  }

  return (
    <View style={styles.container}>
      <Timer time={timeInSeconds} />
      <TimerActions
        timeInSeconds={timeInSeconds}
        onPlayCallback={() => { setIsPlaying(true) }}
        onPauseCallback={pause}
        onStopCallback={stop}
        isPlaying={isPlaying} />
      <View style={styles.test}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00001f',
    justifyContent: 'space-between'
  },
  test: {
    borderWidth: 2,
    width: '100%',
    flex: 1,
    borderColor: 'red'
  }
});

registerRootComponent(App)