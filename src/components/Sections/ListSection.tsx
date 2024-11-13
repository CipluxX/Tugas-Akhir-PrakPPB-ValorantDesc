// @ts-nocheck

import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import React, { useCallback, useEffect, useState } from 'react';
import { InitialButton } from '../Buttons/InitialButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchingWithFigma } from '../../features/figma';

export default function ListSection() {
  const [loaded] = useFonts({
    'valorant-font': require('../../../assets/fonts/Valorant.ttf'),
  });

  useEffect(() => {
    fetchingWithFigma();
  }, [loaded]);

  return (
    <LinearGradient
      colors={['#cd4855', '#6c343e', '#17232b']}
      start={{ x: 0.1, y: 0.0 }}
      className={styles.container}>
      <StatusBar hidden animated />
      <View style={{ display: 'flex', position: 'absolute' }}></View>
      <View className={styles.main}>
        <View className="flex items-center">
          <Image
            source={{
              uri: 'https://valorant-api.com/assets/img/logo_transparent.png?v=1',
            }}
            className="w-[200px] h-[250px] rounded-lg object-center"
          />
        </View>
        <Text className="font-valorant text-6xl text-center text-white">Valorant API</Text>
        <ScrollView>
          <SafeAreaView className=" flex-1 justify-evenly  w-auto  p-2 h-[500px]   rounded-lg">
            <View className=" border-b-2 border-white rounded-lg ">
              <Text className="font-valorant text-3xl text-center text-white ">core content</Text>
            </View>
            <InitialButton tag="Agents" categorie={<Text>Agents</Text>} />
            <InitialButton tag="Weapons" categorie={<Text>Weapons</Text>} />
            <InitialButton tag="Maps" categorie={<Text>Maps</Text>} />
            <InitialButton tag="Competitive" categorie={<Text>Competitive</Text>} />
            <InitialButton tag="Seasons" categorie={<Text>Seasons</Text>} />
          </SafeAreaView>
        </ScrollView>
      </View>

      <View className=" mb-5 flex items-center  flex-row justify-center gap-6 ">
        <SafeAreaView>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png',
              }}
              className="h-[35px] w-[35px] m-2 mt-5"
            />
          </TouchableOpacity>
        </SafeAreaView>
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
