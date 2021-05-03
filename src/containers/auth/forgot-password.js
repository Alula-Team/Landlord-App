import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Header } from "react-native-elements";

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigaiton
import { useNavigation } from "@react-navigation/native";

// Icons
import Feather from "react-native-vector-icons/Feather";

// Styles
import styles from "./auth-styles";

const ForgotPasswordScreen = (props) => {
  const navigation = useNavigation();

<<<<<<< Updated upstream
    const navigation = useNavigation();
    
    const { control, handleSubmit, errors } = useForm();
=======
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
>>>>>>> Stashed changes

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <Header
        backgroundColor={"transparent"}
        barStyle={"light-content"}
        containerStyle={{ borderBottomWidth: 0 }}
        leftComponent={
          <Feather
            name={"arrow-left"}
            size={25}
            style={{
              color: "white",
              marginTop: 40,
              marginLeft: 20,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        centerComponent={
          <Image
            source={require("../../assets/favicon.jpg")}
            style={{ width: 100, height: 100 }}
          />
        }
      />

      {/* Greeting*/}
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subTitle}>Enter your email to continue!</Text>

<<<<<<< Updated upstream
            {/* Form */}
            <View style={styles.form}>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <View style={styles.authFieldContainer}>
                            <View style={styles.emailInput}>
                                <Feather 
                                    name={'mail'}
                                    size={22.5}
                                    style={{alignSelf: 'center', marginHorizontal: 15, color:'#ffffff50'}}
                                />
                                <TextInput
                                    style={styles.email}
                                    placeholder='Email'
                                    placeholderTextColor='#ffffff50'
                                    autoCapitalize='none'
                                    autoCompleteType='email'
                                    autoCorrect={false}
                                    clearButtonMode={'while-editing'}
                                    keyboardType={'email-address'}
                                    keyboardAppearance='dark'
                                    onBlur={onBlur}
                                    onChangeText={(value) => onChange(value)}
                                    value={value}
                                />
                            </View>
                            <View style={styles.errorMsg}>
                                {errors.email && <Text style={styles.errorText}>Please enter a valid email address</Text>}
                            </View>
                        </View>
                    )}
                    name="email"
                    rules={{ required: true }}
                    defaultValue=""
=======
      {/* Form */}
      <View style={styles.form}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.authFieldContainer}>
              <View style={styles.emailInput}>
                <Feather
                  name={"mail"}
                  size={22.5}
                  style={{
                    alignSelf: "center",
                    marginHorizontal: 15,
                    color: "#ffffff50",
                  }}
                />
                <TextInput
                  style={styles.email}
                  placeholder="Email"
                  placeholderTextColor="#ffffff50"
                  autoCapitalize="none"
                  autoCompleteType="email"
                  autoCorrect={false}
                  clearButtonMode={"while-editing"}
                  keyboardType={"email-address"}
                  keyboardAppearance="dark"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
>>>>>>> Stashed changes
                />
              </View>
              <View style={styles.errorMsg}>
                {errors.email && (
                  <Text style={styles.errorText}>
                    Please enter a valid email address
                  </Text>
                )}
              </View>
            </View>
          )}
          name="email"
          rules={{ required: true }}
          defaultValue=""
        />

        {/* Sign In Button */}
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
