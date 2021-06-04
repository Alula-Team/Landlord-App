import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./prop-styles";

const Occupied = ({ navigation }) => {

    const [properties, setProperties] = useState([]);
    const [query, setQuery] = useState("");

    const handleQuery = (text) => {
        setQuery(text);
    };

    const filteredProperties = properties.filter((item) => {
        return item.address.toLowerCase().includes(query.toLowerCase());
    });


    // Separator
    const renderSeparator = () => {
        return (
        <View
            style={{
            height: 0.5,
            //   width: '86%',
            backgroundColor: "#CED0CE50",
            marginLeft: "5%",
            marginRight: "5%",
            }}
        />
        );
    };

     // Empty List Content
    const EmptyListMessage = () => {
        let message =
        properties.length === 0
            ? `Hmm... There is nothing here`
            : `Your search returned 0 properties. Back up and try again.`;
        return (
        <View style={styles.emptyList}>
            <Image
            source={require("../../assets/emptyPropList.png")}
            style={styles.img}
            />
            <Text
            style={{
                color: "#fff",
                marginHorizontal: 35,
                alignSelf: "center",
                fontSize: 18,
            }}
            >
            {message}
            </Text>
        </View>
        );
    };


    return (
        <View style={styles.container}>

            {/* Properties Flat List */}
            <SafeAreaView>
                <FlatList
                    // data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.listCell}
                        onPress={() =>
                        navigation.navigate("PropertyDetail", {
                            itemID: item.id,
                            itemAddress: item.address,
                            itemUnit: item.unit,
                            itemCity: item.city,
                            itemState: item.state,
                            itemZip: item.zip,
                        })
                        }
                    >
                        <View style={{ flexDirection: "row" }}>
                        <Feather name="map-pin" color="#fff" size={20} />
                        <View>
                            <Text style={styles.listItem}>
                            {item.address} {item.unit}
                            </Text>
                        </View>
                        </View>
                        <Feather
                        name="arrow-right"
                        color="#fff"
                        size={20}
                        style={styles.arrow}
                        />
                    </TouchableOpacity>
                    )}
                    contentContainerStyle={{ paddingBottom: 350 }}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={renderSeparator}
                    ListEmptyComponent={EmptyListMessage}
                />
            </SafeAreaView>
            
        </View>
    )
}

export default Occupied
