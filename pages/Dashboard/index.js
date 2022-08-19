import React from "react";
import { View, Button, FlatList } from "react-native";
import styles from "../../styles/DashboardStyles"
import ViewModel from "./ViewModel";

const Dashboard = ({ navigation }) => {
    const viewModel = ViewModel()

    return (
        <View style={styles.container}>
            <FlatList
                data={viewModel?.getData()}
                renderItem={viewModel?.renderItem}
                keyExtractor={item => item.id}
            />

            {/* <Button
                title="Go to Cart"
                onPress={() =>
                    navigation.navigate('Cart')
                } /> */}
        </View>
    )
}

export default Dashboard