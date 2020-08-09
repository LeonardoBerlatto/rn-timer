import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window')


export default StyleSheet.create({
    timerText: {
        color: '#fff',
        fontSize: 60
    },
    progressBar: {
        width: height / 3,
        height: height / 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1000,
        borderColor: '#4630eb',
        borderWidth: 30,
        marginVertical: 20
    }
})