import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { Header } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Forms
import { useForm, Controller } from "react-hook-form";

// Icons
import Feather from "react-native-vector-icons/Feather";

// Firebase
import { signIn } from "../../firebase";

// Style Sheet
import styles from "./styles";

const LoginScreen = ({ navigation }) => {
  // const { control, handleSubmit, formState: { errors } } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [indicator, setIndicator] = useState(false);


  const onSubmit = () => {
    signIn(email, password);
    setEmail("");
    setPassword("");
    setIndicator(!indicator);
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Header
        backgroundColor={"transparent"}
        barStyle={"light-content"}
        containerStyle={{ borderBottomWidth: 0 }}
        centerComponent={
          <Image
            source={require("../../assets/favicon.png")}
            style={{ width: 100, height: 100 }}
          />
        }
      />

      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subTitle}>Sign in to get started!</Text>

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
          {/* <View style={styles.errorMsg}>
                        {errors.email && <Text style={styles.errorText}>Please enter a valid email address</Text>}
                    </View> */}
        </View>

        {/* Password */}
        <View style={styles.authFieldContainer}>
          <View style={styles.inputContainer}>
            <Feather
              name={"lock"}
              size={22.5}
              style={{
                alignSelf: "center",
                marginHorizontal: 15,
                color: "#34383D50",
              }}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Password"
              placeholderTextColor="#34383D50"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCompleteType="password"
              autoCorrect={false}
              clearButtonMode={"while-editing"}
              returnKeyType={"done"}
              onChangeText={(password) => setPassword(password)}
              value={password}
            />
          </View>
          {/* <View style={styles.errorMsg}>
                        {errors.password && <Text style={styles.errorText}>Please enter a valid password.</Text>}
                    </View> */}
          <ActivityIndicator size="large" color="#232256" animating={indicator} hideActivityIndicator='true' />
        </View>

        {/* Forgot Password Button */}
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>

        {/* Sign In Button */}
        <TouchableOpacity style={{ backgroundColor: '#586D81', padding: 18, margin: 20, borderRadius: 10, alignItems: 'center' }} onPress={onSubmit}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>SIGN IN</Text>
        </TouchableOpacity>
      </View>

      {/* Register Button */}
      <TouchableOpacity
        style={styles.otherAuthButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.otherAuthText}>
          Need an account?{" "}
          <Text style={{ fontWeight: "800" }}>Register Instead</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
