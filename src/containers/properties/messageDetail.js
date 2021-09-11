import React, { useState, useCallback, useEffect } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Header, Icon } from "react-native-elements";
import { GiftedChat, Send } from "react-native-gifted-chat";

import UploadImage from '../constants/uploadImage';

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./styles";

// Things I need
//Function to swap buttons when marked complete or unmarked complete

const MessageDetailScreen = ({ navigation }) => {
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
        image: '',
        video: '',
        sent: true,
        received: true,
      },
    ])
  }, [])

  // On Send
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  // Send Button
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <Feather name='send' size={22.5} color='#2e64e5' style={{paddingTop: 10, paddingRight: 10, paddingBottom: 10}} />
        </View>
      </Send>
    );
  }
  // Action Button
  const renderActions = () => {
    return (
      <UploadImage />
    );
  }

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          centerComponent={
            <>
              <Text
                style={{
                  color: "#34383D",
                  fontSize: 17,
                  fontWeight: "600",
                  paddingTop: 7.5
                }}
              >
                Recipient Name
              </Text>
              <Text
              style={{
                color: "#34383D90",
                fontSize: 14,
                fontWeight: "600",
                paddingTop: 10,
              }}
            >
              Property Address
            </Text>
          </>
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
          textInputStyle={{ color: "#34383D", fontSize: 16, fontWeight: "500", paddingTop: 10 }}
          renderUsernameOnMessage={true}
          renderActions={renderActions}
          renderSend={renderSend}
          alwaysShowSend
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

export default MessageDetailScreen;
