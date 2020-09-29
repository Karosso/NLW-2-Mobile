import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    teacherList: {
        marginTop: -30,
    },

    searchForm: {
        marginTop: 0,
        marginBottom: 16,
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },

    inputGroup: {
        flexDirection:'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%',
    },

    input: {
        height: 42,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 0,
        marginBottom: 6,
    },

    submitButton: {
        marginTop: 8,
        backgroundColor: '#04d361',
        height: 42,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    }
});

export default styles;