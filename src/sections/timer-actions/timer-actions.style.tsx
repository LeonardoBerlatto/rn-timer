import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        borderColor: 'red',
        borderWidth: 2,
        paddingVertical: 10,
    },
    actionButton: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 18,
        backgroundColor: '#4630eb',
    },
    actionButtonText: {
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase'
    }
});