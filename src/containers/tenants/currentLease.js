import React, { useState } from "react";
import {
  Alert,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Header, Icon } from "react-native-elements";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./styles";

const CurrentLease = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  // Delete Alert Pop Up
  const deleteAlert = () => {
    Alert.alert(
      "Delete Tenant?",
      "Are you sure you want to delete this tenant?",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Delete",
          style: "destructive",
          //   onPress: () => console.log("Delete Pressed"),
          // onPress: (id) => deleteTenant(itemID),

          onPress: () => {
            // const filtered = tenants.filter((item) => item.id !== id);
            firestore.doc(`tenants/${id}`).delete();
            // setTenants(filtered);
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          centerComponent={{
            text: "Current Lease Agreement",
            style: {
              color: "#34383D",
              fontWeight: "600",
              fontSize: 20,
              paddingTop: 20,
            },
          }}
          leftComponent={
            <Icon
              name="arrow-left"
              type="feather"
              color="#34383D80"
              size={25}
              iconStyle={{
                paddingTop: 20,
                paddingLeft: 10,
                paddingBottom: 10,
              }}
              onPress={() => navigation.goBack()}
            />
          }
          containerStyle={{
            backgroundColor: "#fff",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        />
        <ScrollView>
          {/* Lease Information */}
          <View style={{backgroundColor: '#fff', paddingHorizontal: 30, paddingVertical: 12.5}} >
            {/* Leasing Information */}
            <Text
              style={{
                color: "#34383D90",
                fontSize: 14,
                marginTop: 20,
                fontWeight: "600",
              }}
            >
              Leasing Information:
            </Text>

            {/* Start Date */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>Start Date:</Text>
              <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
                Jan 1, 2021
              </Text>
            </View>

            {/* End Date */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>End Date:</Text>
              <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
                Jan 1, 2022
              </Text>
            </View>

            {/* Lease Length */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>Lease Length:</Text>
              <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
                12 mo
              </Text>
            </View>

            {/* Lease Type */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>Lease Type:</Text>
              <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
                Fixed
              </Text>
            </View>

            {/* Rental Rate */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>Rental Rate:</Text>
              <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
                $1,399
              </Text>
            </View>

            {/* Security Deposit */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>
                Security Deposit:
              </Text>
              <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
                $750
              </Text>
            </View>

            {/* Payment Due */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>Rent Due On:</Text>
              <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
                1st /mo
              </Text>
            </View>

            {/* Details */}
            <View style={{ marginVertical: 30 }}>
              <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "700" }}>Details:</Text>
              <Text style={{ color: "#34383D", fontSize: 14, fontWeight: "500", marginTop: 15 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Sit amet tellus cras adipiscing enim eu turpis. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Posuere urna nec tincidunt praesent semper. Aliquam sem fringilla ut morbi tincidunt augue interdum. Consequat semper viverra nam libero justo laoreet. Laoreet non curabitur gravida arcu ac tortor dignissim. Fermentum posuere urna nec tincidunt praesent semper feugiat. Massa tincidunt nunc pulvinar sapien et. At urna condimentum mattis pellentesque id nibh tortor. Rhoncus dolor purus non enim praesent elementum facilisis leo. A lacus vestibulum sed arcu non odio euismod. Est pellentesque elit ullamcorper dignissim cras. Gravida neque convallis a cras semper. Quam quisque id diam vel quam elementum pulvinar etiam non. Massa id neque aliquam vestibulum. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.

                Suspendisse sed nisi lacus sed. Risus at ultrices mi tempus imperdiet nulla malesuada. Enim sit amet venenatis urna. Sapien eget mi proin sed libero enim sed faucibus turpis. Nibh mauris cursus mattis molestie a iaculis at erat. Orci sagittis eu volutpat odio. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. In ornare quam viverra orci sagittis eu. Praesent tristique magna sit amet. Sed augue lacus viverra vitae congue. Vel pretium lectus quam id leo in. Gravida quis blandit turpis cursus in hac. Arcu non sodales neque sodales ut. Non pulvinar neque laoreet suspendisse interdum consectetur. Ultrices eros in cursus turpis massa tincidunt dui ut. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Arcu vitae elementum curabitur vitae nunc sed velit. Leo a diam sollicitudin tempor id. Sodales neque sodales ut etiam sit amet nisl purus in.

                Vitae tempus quam pellentesque nec nam aliquam. Odio eu feugiat pretium nibh. Tristique magna sit amet purus gravida quis blandit turpis cursus. Sed libero enim sed faucibus turpis in eu mi bibendum. Semper viverra nam libero justo laoreet sit amet cursus. Lectus mauris ultrices eros in cursus turpis massa. Bibendum neque egestas congue quisque egestas. Dignissim suspendisse in est ante. Nisi vitae suscipit tellus mauris a diam. Accumsan tortor posuere ac ut consequat semper viverra. Feugiat sed lectus vestibulum mattis ullamcorper velit. In cursus turpis massa tincidunt dui ut ornare lectus sit. Scelerisque fermentum dui faucibus in ornare. Pulvinar elementum integer enim neque volutpat ac tincidunt. Adipiscing enim eu turpis egestas pretium. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Faucibus et molestie ac feugiat sed.

                Tristique et egestas quis ipsum suspendisse ultrices gravida. Purus in mollis nunc sed id semper risus in hendrerit. Eu mi bibendum neque egestas congue quisque egestas diam in. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Magna ac placerat vestibulum lectus mauris ultrices. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Nunc mattis enim ut tellus. Sagittis vitae et leo duis ut. Purus faucibus ornare suspendisse sed nisi lacus. Egestas congue quisque egestas diam in arcu. Quam viverra orci sagittis eu volutpat odio.

                Viverra nam libero justo laoreet sit amet cursus sit amet. Nec feugiat nisl pretium fusce id velit ut. Ultrices dui sapien eget mi proin sed. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Ultricies mi eget mauris pharetra. Sed felis eget velit aliquet sagittis id consectetur purus. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Quis commodo odio aenean sed. Id neque aliquam vestibulum morbi blandit cursus risus at. Pulvinar elementum integer enim neque. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. At urna condimentum mattis pellentesque. Nisl nisi scelerisque eu ultrices vitae auctor. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Scelerisque viverra mauris in aliquam sem fringilla ut.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default CurrentLease;
