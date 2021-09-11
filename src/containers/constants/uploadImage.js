import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import { Camera } from 'expo-camera';

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

const UploadReceipt = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [modalVisible, setModalVisible] = useState(false);

    // Camera
    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return(
        <>
            {/* Upload Recipt*/}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Feather name='image' color='#34383D90' size={25} style={{paddingTop: 10, paddingLeft: 10, paddingBottom: 10}} />
            </TouchableOpacity>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.cameraContainer}>
                    <Camera style={styles.camera} type={type}>
                        <View style={styles.cameraGroup}>
                            {/* Back Button */}
                            <TouchableOpacity style={styles.backButton} onPress={() => setModalVisible(!modalVisible)}>
                                {/* <Feather name='arrow-left' size={25} color='#fff' /> */}
                                <Text style={styles.cancel}>Cancel</Text>
                            </TouchableOpacity>
                            
                            {/* Flip Camera */}
                            <TouchableOpacity
                                style={styles.flipButton}
                                onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                                );
                                }}>
                                <Feather name='repeat' size={20} color='#fff' />
                            </TouchableOpacity>

                            {/* Capture Image Button */}
                            <TouchableOpacity 
                                style={{alignSelf: 'center'}} 
                                onPress={async() => {
                                    if(cameraRef){
                                    let photo = await cameraRef.takePictureAsync();
                                    console.log('photo', photo);
                                    }
                                }}
                            >
                                <View style={styles.captureOuter}>
                                    <View style={styles.captureInner}></View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            </Modal>
        </>
    );

}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#000'
    },
    camera: {
        flex: 1
    },
    cameraGroup: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end'
    },
    backButton: {
        flex: 0.1,
        marginLeft: 30,
        top: 60,
        position: 'absolute',
    },
    cancel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
    },
    flipButton: {
        flex: 0.1,
        marginLeft: 30,
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
    },
    captureOuter: { 
        borderWidth: 3,
        borderRadius: 50,
        borderColor: 'white',
        height: 75,
        width: 75,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    captureInner: {
        borderRadius: 50,
        height: 60,
        width: 60,
        backgroundColor: 'white',
    }
}); 

export default UploadReceipt;