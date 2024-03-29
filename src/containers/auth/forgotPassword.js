import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Header } from "react-native-elements";

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigaiton
import { useNavigation } from "@react-navigation/native";

// Icons
import Feather from "react-native-vector-icons/Feather";

// Styles
import styles from "./styles";
import { handlePasswordReset } from "../../firebase";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    handlePasswordReset(email);
    setEmail(email);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <Header
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        containerStyle={{ borderBottomWidth: 0 }}
        leftComponent={
          <Feather
            name={'arrow-left'}
            size={25}
            style={{
              color: '#34383D50',
              marginTop: 40,
              marginLeft: 20
            }}
            onPress={() => navigation.goBack()}
          />
        }
        centerComponent={
          <Image source={require('../../assets/favicon.png')} style={{ width: 100, height: 100 }} />
        }
      />

      {/* Greeting*/}
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subTitle}>Enter your email to continue!</Text>

      {/* Form */}
      <View style={styles.form}>
        {/* Email */}
        <View style={styles.authFieldContainer}>
          <View style={styles.inputContainer}>
            <Feather
              name={"mail"}
              size={22.5}
              style={{
                alignSelf: "center",
                marginHorizontal: 15,
                color: "#34383D50",
              }}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Email"
              placeholderTextColor="#34383D50"
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              clearButtonMode={"while-editing"}
              keyboardType={"email-address"}
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
          </View>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={{ backgroundColor: '#586D81', padding: 18, margin: 20, borderRadius: 10, alignItems: 'center' }} onPress={onSubmit}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
