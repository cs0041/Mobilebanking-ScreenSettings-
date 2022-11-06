/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,

} from 'react-native';

import React from 'react';
import OTP_list from '../components/OTP_list';
import {useState, useEffect} from 'react';
import {TouchableHighlight} from 'react-native';

import logo from '../image/logo.png';
import back from '../image/back.png';

const VerifyOTP = ({navigation}) => {
  const [pin, setPin] = useState('');
  const onPress = value => {
    if (/^([0-9]){0,5}$/.test(pin) && /^([0-9])$/.test(value)) {
      setPin(val => val + value);
      console.log(pin);
      console.log(pin.length);
    }
  };
  const delClick = () => {
    if (pin.length == 0) {
      return;
    }
    setPin(val => val.slice(0, -1));
  };

  useEffect(() => {
    if (pin.length === 6) {
      if (pin == '111111') {
        console.log('vaid PIN!!');
        navigation.navigate('NewPin');
      }

      //check
    }
  }, [pin]);

  return (
    <View style={{flex: 1}} className="bg-green-regis">
      <View
        style={{flex: 4}}
        className=" object-center w-full rounded-b-xl  bg-green-regis container">
        <View className=" w-full h-full  justify-between items-center ">
          <Image source={logo} className="w-32 h-32" />
          <Text
            style={{fontFamily: 'NotoSans-Bold'}}
            className="text-3xl text-egg">
            Please Enter OTP PIN
          </Text>
          <View className="w-5/6 h-10 bg-base rounded-sm mb-8">
            <Text
              style={{fontFamily: 'NotoSans-Bold'}}
              className="m-auto text-2xl">
              {pin}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{flex: 6}}
        className="flex flex-col h-fit justify-between px-7 py-7">
        <View className="flex justify-between flex-row w-full">
          <OTP_list num={'1'} onPress={onPress} />
          <OTP_list num={'2'} onPress={onPress} />
          <OTP_list num={'3'} onPress={onPress} />
        </View>

        <View className="flex justify-between flex-row w-full">
          <OTP_list num={'4'} onPress={onPress} />
          <OTP_list num={'5'} onPress={onPress} />
          <OTP_list num={'6'} onPress={onPress} />
        </View>

        <View className="flex justify-between flex-row w-full">
          <OTP_list num={'7'} onPress={onPress} />
          <OTP_list num={'8'} onPress={onPress} />
          <OTP_list num={'9'} onPress={onPress} />
        </View>

        <View className="flex justify-between flex-row w-full">
          <View className="flex  h-20 w-20 justify-center items-center flex-row rounded-full" />
          <OTP_list num={'0'} onPress={onPress} />

          <TouchableHighlight
            className="rounded-full"
            onPress={() => delClick()}>
            <View className="flex h-20 w-20 justify-center items-center flex-row rounded-full">
              <Image source={back} className="w-16 h-16 items-center" />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default VerifyOTP;
