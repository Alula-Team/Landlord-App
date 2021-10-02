import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

const UploadImage = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
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


    return(
        <>
            {/* Upload Image*/}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* Camera Roll */}
                <TouchableOpacity onPress={cameraRoll}>
                    <Feather name='image' color='#34383D90' size={25} style={{ padding: 10 }} />
                </TouchableOpacity>

                {/* Take Photo */}
                <TouchableOpacity onPress={takePhoto}>
                    <Feather name='camera' color='#34383D90' size={25} style={{ paddingVertical: 10 }} />
                </TouchableOpacity>
            </View>
        </>
    );
}

export default UploadImage;