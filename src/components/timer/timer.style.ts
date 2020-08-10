import { Dimensions, StyleSheet } from 'react-native';

import { DEFAULT_TEXT_COLOR, PRIMARY_COLOR } from '../../styles/color-pallete';

const { height } = Dimensions.get('window')


export default StyleSheet.create({
    timerText: {
        color: DEFAULT_TEXT_COLOR,
        fontSize: 60
    },
    progressBar: {
        width: height / 3,
        height: height / 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1000,
        borderColor: PRIMARY_COLOR,
        borderWidth: 30,
        marginVertical: 20
    }
})