import { StyleSheet } from 'react-native';

import { BACKGROUND_COLOR, DEFAULT_TEXT_COLOR } from '../../../../styles/color-pallete';

export default StyleSheet.create({
    entry: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOR,
        paddingVertical: 20,
        paddingLeft: 30,
        borderBottomWidth: 2,
        borderBottomColor: '#210bc6'
    },
    entryText: {
        paddingLeft: 20,
        color: DEFAULT_TEXT_COLOR,
        fontSize: 30
    }
})
