import React, { useState, useCallback, useEffect } from "react";
import { Text, View, Image, FlatList } from "react-native";
import { Header, Icon } from "react-native-elements";
import { GiftedChat, Send } from "react-native-gifted-chat";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./styles";

// Things I need
//Function to swap buttons when marked complete or unmarked complete

const ServiceRequestDetailScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello, my faucet is leaking in the master bedroom.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Joseph Smith',
        },
      },
    ])
  }, [])

  // On Send
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          centerComponent={
            <Text
              style={{
                color: "#34383D",
                fontSize: 17,
                fontWeight: "600",
                paddingTop: 22.5,
              }}
            >
              Property Address
            </Text>
          }
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

        {/* Chat */}
        <GiftedChat
          messages={messages}
          isTyping={true}
          placeholder='What would you like to say?'
          textInputStyle={styles.inputField}
          renderUsernameOnMessage={true}
          keyboardShouldPersistTaps='always'
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        
          
      </View>
    </>
  );
};

export default ServiceRequestDetailScreen;
