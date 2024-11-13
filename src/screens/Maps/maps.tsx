// @ts-nocheck

import axios, { AxiosResponse, AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { styles } from '../../components/Sections/ListSection';
import { LinearGradient } from 'expo-linear-gradient';
import CoreTitle from '../../components/Headers/CoreTitle';
import { useNavigation } from '@react-navigation/native';
import { ValorantLoader } from '../../components/Loaders/ValorantLoader';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export const Maps = (): React.ReactNode => {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  const [maps, setMaps] = useState<Array<any>>([]);

  const [view, setView] = useState<boolean>(false);

  const loading = useCallback((time: number) => {
    setTimeout(() => {
      setView(!view);
    }, time);
  }, []);

  useEffect(() => {
    loading(1200);
    axios
      .get('https://valorant-api.com/v1/maps')
      .then((res: AxiosResponse) => {
        const { data } = res.data;

        setMaps(data);
        // alert(JSON.stringify(maps));
      })
      .catch((err: AxiosError) => {
        if (err instanceof AxiosError) {
          alert(
            JSON.stringify({
              cause: err.cause,
              code: err.code,
              config: err.config,
            })
          );
        }
      });
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
          <CoreTitle title="Maps" />
          <View className=" w-full h-full rounded-lg p-4 bg-[#2022253f]    ">
            {maps.map((item) => {
              return (
                <View
                  key={item.uuid}
                  className="rounded-b-lg mb-5 bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f]   shadow-lg ">
                  <SafeAreaView className="">
                    <TouchableOpacity
                      className=" w-full p-5 rounded-lg "
                      onPress={() =>
                        navigation.navigate('MapsDetails', {
                          description: item.narrativeDescription,
                          display: item.displayIcon,
                          icon: item.listViewIcon,
                          tatical: item.tacticalDescription,
                          callouts: item.callouts,
                        })
                      }>
                      <View className="flex  justify-between flex-row  items-center">
                        <Text className="text-[55px] text-start font-valorant text-white mb-2">
                          {item.displayName}
                        </Text>

                        <Text className="font-bold text-white border-b-2 border-white text-xs">
                          {item.coordinates}
                        </Text>
                      </View>

                      <View className="flex flex-row justify-between  bg-[#ffffff18] h-auto w-full items-center rounded-lg shadow-xl">
                        <Image
                          source={{ uri: item.splash }}
                          className="   w-[350px] h-[300px] rounded-lg object-center  "
                        />
                      </View>
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
