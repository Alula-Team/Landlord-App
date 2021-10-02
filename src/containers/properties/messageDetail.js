import React, { useState, useCallback, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { GiftedChat, Send, Actions, InputToolbar } from "react-native-gifted-chat";
import * as ImagePicker from 'expo-image-picker';

// Constant Imports
import LoadingScreen from "../constants/LoadingScreen";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./styles";
import { Input } from "react-native-elements/dist/input/Input";

// Things I need
//Function to swap buttons when marked complete or unmarked complete

const MessageDetailScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);
  
  useEffect(() => {
    // Set Messages
    setMessages([
      {
        _id: 1,
        text: 'Hello, my faucet is leaking in the master bedroom.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Joseph Smith',
        },
        image: 'https://unsplash.com/photos/6bjbtbHpOpI',
        sent: true,
        received: true,
      },
    ]);

    // Camera Roll ASYNC
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
    
    // Take Photo ASYNC
    (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestCameraPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
  }, []);

  // Camera Roll
  const cameraRoll = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: false,
    aspect: [4, 3],
    quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
    setImage(result.uri);
    }
  };

  // Take Image
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
    setImage(result.uri);
    }
  };

  // On Send
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
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
  const renderActions = (props) => {
    return (
      <Actions 
        {...props}
        options={{
          'Choose from Library': () => {
            cameraRoll();
          },
          'Take Photo': () => {
            takePhoto();
          },
          Cancel: () => {
            
          }
        }}
        icon={() => (
          <Feather name='image' color='#34383D90' size={25}  />
        )}
        onSend={onSend}
      />
    );
  }
  
  // Message Image
  const renderMessageImage = () => {
    return(
      <TouchableOpacity>
        <Image source={{uri: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/59/fd.jpg' }} style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, width: '100%', height: 200, }} />
      </TouchableOpacity>
    );
  }

  // Image Preview
  const renderImagePreview = (imageProps) => {
    return (
      <View style={{ padding: 10 }}>
        <Image source={{ uri: image }} style={{ borderRadius: 5, width: 100, height: 100, }} {...imageProps} />
      </View>
    );
  }

  // Render Loading
  const renderLoading = () => {
    return(
      <LoadingScreen />
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
          // infiniteScroll={true}
          // loadEarlier={true}
          placeholder='What would you like to say?'
          textInputStyle={{ color: "#34383D", fontSize: 16, fontWeight: "500", paddingTop: 10 }}
          renderActions={renderActions}
          renderSend={renderSend}
          renderMessageImage={renderMessageImage}
          renderLoading={renderLoading}
          keyboardShouldPersistTaps='always'
          isKeyboardInternallyHandled={true}
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
