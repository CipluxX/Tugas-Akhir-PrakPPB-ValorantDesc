// @ts-nocheck

import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, SafeAreaView, Image, ScrollView, ImageBackground } from 'react-native';
import { styles } from '../../components/Sections/ListSection';
import axios from 'axios';

import { StackNavigationProp } from '@react-navigation/stack';

import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../navigation';
import { useNavigation } from '@react-navigation/native';
import { TypeAgent } from '../../features/zod/agentDetails';
import { HabilitieIcon } from '../../components/Icons/HabilitieIcon';
import CoreTitle from '../../components/Headers/CoreTitle';
import { ValorantLoader } from '../../components/Loaders/ValorantLoader';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

import { Loader } from '../../features/load/index';

export const Agents = (): React.ReactNode => {
  const navigation = useNavigation<OverviewScreenNavigationProps>();
  const [load, setLoad] = useState<Array<any>>([]);
  const [view, setView] = useState<Loader>(false);

  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
      .then((response) => {
        const { data } = response.data;
        setLoad(data);
      })
      .catch((error) => alert(error));

    setTimeout(() => {
      setView(!false);
    }, 1300);
  }, []);

  return (
    <LinearGradient
      colors={['#cd4855', '#6c343e', '#17232b']}
      start={{ x: 0.1, y: 0.1 }}
      accessible
      className={styles.container}>
      {view == false ? (
        <ValorantLoader />
      ) : (
        <ScrollView>
          <CoreTitle title="Agents" />

          <View className=" w-full h-full rounded-lg p-8 bg-[#2022253f]    ">
            {load.map((item) => {
              return (
                <View
                  key={item.uuid}
                  className="rounded-b-lg mb-5 bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f]   shadow-lg ">
                  <SafeAreaView className="">
                    <TouchableOpacity
                      className=" w-full p-5 rounded-lg "
                      onPress={() =>
                        navigation.navigate('AgentDetails', {
                          name: item.displayName,
                          colors: {
                            one: item.backgroundGradientColors[0],
                            two: item.backgroundGradientColors[1],
                            three: item.backgroundGradientColors[2],
                          },
                          image: item.fullPortraitV2,
                          description: item.description,
                          background: item.background,
                          habilities: {
                            one: item.abilities[0].description,
                            two: item.abilities[1].description,
                            three: item.abilities[2].description,
                            ult: item.abilities[3].description,
                          },
                          nameHabilities: {
                            one: item.abilities[0].displayName,
                            two: item.abilities[1].displayName,
                            three: item.abilities[2].displayName,
                            ult: item.abilities[3].displayName,
                          },
                          iconHabilities: {
                            one: item.abilities[0].displayIcon,
                            two: item.abilities[1].displayIcon,
                            three: item.abilities[2].displayIcon,
                            ult: item.abilities[3].displayIcon,
                          },
                          role: {
                            role: item.role.displayName,
                            description: item.role.description,
                          },
                        } satisfies TypeAgent)
                      }>
                      <View className="flex  justify-start flex-row gap-12 items-center">
                        <Text className="text-[55px] text-start font-valorant text-white">
                          {item.displayName}
                        </Text>
                      </View>

                      <LinearGradient
                        colors={[
                          `#${item.backgroundGradientColors[0]}`,
                          `#${item.backgroundGradientColors[1]}`,
                          `#${item.backgroundGradientColors[2]}`,
                        ]}
                        start={{ x: 0.2, y: 0.5 }}
                        className="flex flex-row justify-between px-2 bg-zinc-200 h-[50px] items-center rounded-lg ">
                        <Image
                          source={{ uri: item.displayIcon }}
                          className=" w-[70px] h-[70px] rounded-lg "
                        />
                        <HabilitieIcon item={item.abilities[0].displayIcon as string} />
                        <HabilitieIcon item={item.abilities[1].displayIcon as string} />
                        <HabilitieIcon item={item.abilities[2].displayIcon as string} />
                        <HabilitieIcon item={item.abilities[3].displayIcon as string} />
                      </LinearGradient>
                    </TouchableOpacity>
                  </SafeAreaView>
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
    </LinearGradient>
  );
};
