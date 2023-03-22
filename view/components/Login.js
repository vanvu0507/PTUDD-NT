import React, { useState, useEffect, useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView, useWindowDimensions, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function Login() {
  // const [windowDimension,setWindowDimension] = useState({width: Dimensions.get('window').width, height: Dimensions.get('window').height})
  
  // useEffect(() => {
  //   setWindowDimension({width: Dimensions.get('window').width, height: Dimensions.get('window').height})
  // },[Dimensions.get('window').width])
  const {height, width} = useWindowDimensions();
  const [bgColor, setBgColor] = useState({color1: '#6A00BF', textColor1: 'white', borderColor1: '#6A00BF', color2: 'white', textColor2: 'black', borderColor2: 'black'});
  const [status, setStatus] = useState(true);
  // const [bgColorPhoneNum, setBgColorPhoneNum] = useState({color1: 'white', borderColor1: 'black'});
  const [fontsLoaded] = useFonts({
    'robotocondensed-bold': require('../../assets/fonts/robotocondensed-bold.ttf'),
    'robotocondensed-light': require('../../assets/fonts/robotocondensed-light.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const changeColor = (name) => {
    if(name == 'email'){
      setBgColor({color1: '#6A00BF', textColor1: 'white', borderColor1: '#6A00BF',color2: 'white', textColor2: 'black', borderColor2: 'black'})
      setStatus(true);
    } else {
      setBgColor({color1: 'white', textColor1: 'black', borderColor1: 'black', color2: '#6A00BF', textColor2: 'white', borderColor2: '#6A00BF'})
      setStatus(false);
    }
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style = {{width: width, height: height}}>
    <View style={styles.layout1}>
      <Text style ={{fontFamily: 'robotocondensed-bold', fontSize: 30}}>Login Account</Text>
      <Text style ={{fontFamily: 'robotocondensed-light', fontSize: 17}}>Hello, welcome back to our account !</Text>
    </View>
      
      <View style = {styles.layout2}>
      <TouchableOpacity onPress={() => changeColor('email')} style={{
        alignItems: 'center',
        borderTopStartRadius: 8,
        borderBottomStartRadius: 8,
        borderWidth: 1.5,
        borderColor: bgColor.borderColor1,
        backgroundColor: bgColor.color1,
        width: 170,
        height: 50,
        paddingVertical: 12,
        }}>
        <Text style= {{fontFamily: 'robotocondensed-bold', fontSize: 20, color: bgColor.textColor1}}>Email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeColor('phoneNumber')} style={{
        alignItems: 'center',
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
        borderWidth: 1.5,
        borderLeftWidth: 0,
        borderColor: bgColor.borderColor2,
        backgroundColor: bgColor.color2,
        width: 170,
        height: 50,
        paddingVertical: 12,
        }}>
        <Text style= {{fontFamily: 'robotocondensed-bold', fontSize: 20, color:bgColor.textColor2}}>Phone Number</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.layout3}>
      {status ? (
      <View style = {styles.layout3}>
       <TextInput
       style={styles.input}
       placeholder="Email address"
       inputMode='email'
       onBlur={() => Alert.alert('on blur')}
       ></TextInput>
       <TextInput
       style={styles.input}
       placeholder="Password"
       secureTextEntry={true}
       ></TextInput>
       <TouchableOpacity>
        <Text style = {{color: '#007AFF'}}>Forgot Password</Text>
       </TouchableOpacity>
       <TouchableOpacity style = {{
        width: 300,
        height: 50,
        borderRadius: 8,
        backgroundColor:'#190152',
        paddingVertical: 15,
        marginVertical: 40,
       }}>
        <Text style = {{color: 'white', textAlign: 'center'}}>Login</Text>
       </TouchableOpacity>
      </View>
       ) : (
       <View style = {styles.layout3}>
       <TextInput 
       style={styles.input}
       placeholder="Enter phone number"
       inputMode='numeric'
       />
       <TouchableOpacity style = {{
        width: 300,
        height: 50,
        borderRadius: 8,
        backgroundColor:'#190152',
        paddingVertical: 15,
        marginVertical: 30,
       }}>
        <Text style = {{color: 'white', textAlign: 'center'}}>Send OTP</Text>
       </TouchableOpacity>
       </View>
       )
      }

       <Text style = {{color: 'grey'}}>Or sign up with</Text>
       
       
       <TouchableOpacity 
       style = {{
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
       }}
       >
       <Image
        style={{}}
        source={require('../../assets/icon-google.png')}
      />
      <Text style = {{ fontFamily: 'robotocondensed-bold', marginLeft: 5, fontSize: 18}}>Google</Text>
       </TouchableOpacity>

      <View style = {{
        flexDirection: 'row',
        alignItems: 'center' 
        }}>
       <Text style = {{color: 'grey'}}>Not register yet ?</Text>
       <TouchableOpacity style = {{
        // paddingVertical: 5,
       }}>
        <Text style = {{fontFamily: 'robotocondensed-bold', color: 'black'}}>Create an account</Text>
       </TouchableOpacity>
       </View>

      </View>
      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  layout1: {
    // flex: 1,
    // marginLeft: 20,
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  layout2: {
    marginLeft: -3,
    marginVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  layout3: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
  },
});
