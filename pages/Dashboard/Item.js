import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../styles/DashboardStyles"
import { IconButton } from "react-native-paper"

const Item = ({ name, image, description, quantity, increment, decrement }) => {

    return (
        <View style={styles.itemcontainer}>
            <View style={styles.itemsubcontainer}>
                <View>
                    <Image
                        style={styles.itemimg}
                        source={{ uri: image }}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.itemname}>{name}</Text>
                    <Text>{description}</Text>
                    <View style={styles.quantitycontainer}>
                        {quantity ? <IconButton
                            icon="minus"
                            size={25}
                            onPress={decrement}
                        /> : ""}
                        {quantity ? <Text style={styles.quantity}>{quantity}</Text> : ""}
                        <IconButton
                            icon="plus"
                            size={25}
                            onPress={increment}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
};

export default Item