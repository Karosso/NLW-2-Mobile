import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 40,
        backgroundColor: '#8257e5',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 24,
        maxWidth: 160,
        marginVertical: 16,
    },
});

export default styles;