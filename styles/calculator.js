import { StyleSheet } from 'react-native';

export const calculator = StyleSheet.create({
    calculatorContainer: {
        padding: 16,
        backgroundColor: '#ffffff',
        marginHorizontal: 25,
        marginBottom: 20,
        borderRadius: 10,
    },
    item: {
        flexDirection: "column",
        gap: 10,
        paddingBottom: 30,
    },
    box: {
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-between",
        // gap: 80,
    },
    curency: {
        flexDirection: "row", 
        gap: 10, 
        alignItems: "center"
    },
    input: {
        paddingHorizontal: 10,
        backgroundColor: "#EFEFEF",
        width: 150,
        height: 45, 
        borderRadius: 10,
        fontSize: 20,
        textAlign: "right",
        color: "#000",
        fontWeight: "bold"  
    },
})