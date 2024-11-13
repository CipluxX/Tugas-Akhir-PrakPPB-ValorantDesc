// @ts-nocheck

import { View, Text, Image, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useEffect, useState } from 'react';

import * as Font from 'expo-font';

import { SafeAreaView } from 'react-native-safe-area-context';
import { InitialButton } from '../components/Buttons/InitialButton';

import { styles as data } from '../styles/styles';
import { CoreHeader } from '../components/Headers/CoreHeader';
import { CoreFooter } from '../components/Footers/CoreFooter';

export default function Overview() {
  const [tag] = useState<string[]>(['Agents', 'Weapons', 'Maps', 'Competitive', 'Seasons']);

  const loadFonts = useCallback(async () => {
    await Font.loadAsync({
      'valorant-font': require('../../assets/fonts/Valorant.ttf'),
    });
  });

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <LinearGradient
      colors={['#cd4855', '#6c343e', '#17232b']}
      start={{ x: 0.1, y: 0.0 }}
      className={data.container}>
      <StatusBar hidden animated />
      <View className={data.main}>
        <View className="flex items-center">
          <Image
            source={{
              uri: 'https://valorant-api.com/assets/img/logo_transparent.png?v=1',
            }}
            className="w-[200px] h-[250px] rounded-lg object-center"
          />
          <Text className="font-valorant text-6xl text-center text-white">Valorant API</Text>
        </View>
        <ScrollView>
          <SafeAreaView className=" flex-1 justify-evenly  w-auto  p-2 h-[500px]   rounded-lg">
            <CoreHeader />
            {tag.map((item, index) => {
              return (
                <InitialButton tag={item as string} key={index} categorie={<Text>{item}</Text>} />
              );
            })}
          </SafeAreaView>
          <CoreFooter />
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

export const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
  container: 'flex-1 p-6 ',
  main: 'flex-1 max-w-[960] justify-start ',
  title: 'text-[64px] font-bold text-center',
  subtitle: 'text-4xl text-gray-700 text-center text-gray-200',
};
