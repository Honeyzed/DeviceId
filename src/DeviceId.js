// React Native Get Unique ID of Device
// https://aboutreact.com/react-native-get-unique-id-of-device/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

//import DeviceInfo which will help us to get UniqueId
import DeviceInfo from 'react-native-device-info';

const App = () => {
  const [deviceId, setDeviceId] = 
    useState('Click below to get unique Id');

  const getdeviceId = () => {
    var uniqueId = DeviceInfo.getUniqueId();
    setDeviceId(uniqueId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
           Get Unique ID of Device
        </Text>
        <Text style={styles.textStyle}>
          {deviceId}
        </Text>
        <TouchableOpacity
          onPress={getdeviceId}
          activeOpacity={0.5}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            SHOW ME THE UNIQUE ID OF DEVICE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: '#646464',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
    padding: 20,
    color: '#f00',
  },
});