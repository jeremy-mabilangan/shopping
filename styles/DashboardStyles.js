import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 10,
        height: "100%",
        width: "100%"
    },
    itemcontainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        margin: 10
    },
    itemsubcontainer: {
        flexDirection: "row"
    },
    textcontainer: {
        padding: 10
    },
    itemimg: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    itemname: {
        color: "#000",
        fontSize: 18,
        paddingBottom: 10
    },
    addminusicon: {
        width: 25,
        height: 25,
        resizeMode: 'cover'
    },
    quantitycontainer: {
        flexDirection: "row",
        marginTop: 10
    },
    quantity: {
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 20,
        marginTop: 10
    }
});

export default styles