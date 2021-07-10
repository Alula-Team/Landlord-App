import React, { useContext } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Header } from "react-native-elements";
// import { UserContext } from "../../providers/UserProvider";

// Firebase
import { firestore, loggingOut } from "../../firebase/firebase";
import firebase from "firebase/app";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./sett-styles";
const auth = firebase.auth();

const Settings = ({ navigation }) => {
 
  // Sign Out
  async function handleSignOut() {
    try {
      await loggingOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          placement={"left"}
          centerComponent={{
            text: "Settings",
            style: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 25,
              paddingTop: 30,
              paddingBottom: 7
            },
          }}
          containerStyle={{
            backgroundColor: "#232256",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        />

        <ScrollView style={{ marginTop: 20 }}>

          {/* Edit Profile Button */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="user"
                color="#34383D80"
                size={20}
                style={{ alignSelf: "center", marginLeft: 15 }}
              />
              <Text style={styles.buttonText}>Edit Profile</Text>
            </View>
            <Feather
              name="arrow-right"
              color="#34383D80"
              size={20}
              style={{ alignSelf: "center", marginRight: 10 }}
            />
          </TouchableOpacity>

          {/* Update Payment Button */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("UpdatePayment")}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="credit-card"
                color="#34383D80"
                size={20}
                style={{ alignSelf: "center", marginLeft: 15 }}
              />
              <Text style={styles.buttonText}>Update Payment Info</Text>
            </View>
            <Feather
              name="arrow-right"
              color="#34383D80"
              size={20}
              style={{ alignSelf: "center", marginRight: 10 }}
            />
          </TouchableOpacity>

          {/* Enable Notifications Button */}
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="bell"
                color="#34383D80"
                size={20}
                style={{ alignSelf: "center", marginLeft: 15 }}
              />
              <Text style={styles.buttonText}>Enable Notifications</Text>
            </View>
            <Feather
              name="arrow-right"
              color="#34383D80"
              size={20}
              style={{ alignSelf: "center", marginRight: 10 }}
            />
          </TouchableOpacity>

          {/* Enable Location Button */}
          {/* <TouchableOpacity style={styles.buttonContainer}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="map-pin"
                color="#34383D80"
                size={20}
                style={{ alignSelf: "center", marginLeft: 15 }}
              />
              <Text style={styles.buttonText}>Enable Location</Text>
            </View>
            <Feather
              name="arrow-right"
              color="#34383D80"
              size={20}
              style={{ alignSelf: "center", marginRight: 10 }}
            />
          </TouchableOpacity> */}

          {/* Generate Reports Button */}
          {/* <TouchableOpacity style={styles.buttonContainer}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="activity"
                color="#34383D80"
                size={20}
                style={{ alignSelf: "center", marginLeft: 15 }}
              />
              <Text style={styles.buttonText}>Generate Reports</Text>
            </View>
            <Feather
              name="arrow-right"
              color="#34383D80"
              size={20}
              style={{ alignSelf: "center", marginRight: 10 }}
            />
          </TouchableOpacity> */}

          {/* About Button */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("About")}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="alert-circle"
                color="#34383D80"
                size={20}
                style={{ alignSelf: "center", marginLeft: 15 }}
              />
              <Text style={styles.buttonText}>About</Text>
            </View>
            <Feather
              name="arrow-right"
              color="#34383D80"
              size={20}
              style={{ alignSelf: "center", marginRight: 10 }}
            />
          </TouchableOpacity>

          {/* Logout Button */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSignOut}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="log-out"
                color="red"
                size={20}
                style={{ alignSelf: "center", marginLeft: 15 }}
              />
              <Text style={styles.logoutButtonText}>Logout</Text>
            </View>
            <Feather
              name="arrow-right"
              color="red"
              size={20}
              style={{ alignSelf: "center", marginRight: 10 }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default Settings;
