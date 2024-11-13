// @ts-nocheck
import { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import { ValorantLoader } from '../../components/Loaders/ValorantLoader';
import { useNavigation } from '@react-navigation/native';
import { Loader } from '../../features/load/index';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../components/Sections/ListSection';
import CoreTitle from '../../components/Headers/CoreTitle';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation';

type OverviewScrenNavigationProps = StackNavigationProp<RootStackParamList>;

export const Seasons = (): React.ReactNode => {
  const navigation = useNavigation<OverviewScrenNavigationProps>();

  const [view, setView] = useState<Loader>(false);
  const [season, setSeason] = useState<object>({
    standart: undefined,
    competitive: undefined,
  });

  const stardartFetching = useCallback(() => {
    axios
      .get('https://valorant-api.com/v1/seasons')
      .then((res: AxiosResponse) => {
        const { data } = res.data;
        setSeason({
          ...season,
          standart: data,
        });
      })
      .catch((err: AxiosError) =>
        alert({
          code: err.code,
          cause: err.cause,
          config: err.config,
        })
      );
  }, []);

  const competitiveFetch = useCallback(() => {
    axios
      .get('https://valorant-api.com/v1/seasons/competitive')
      .then((res: AxiosResponse) => {
        const { data } = res.data;
        setSeason({
          ...season,
          competitive: data,
        });
      })
      .catch((err: AxiosError) =>
        alert({
          code: err.code,
          cause: err.cause,
          config: err.config,
        })
      );
  }, []);

  useEffect(() => {
    stardartFetching();
    competitiveFetch();

    setTimeout(() => {
      setView(!view);
    }, 1200);
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
          <CoreTitle title="Seasons" />
          <View className=" w-full h-full rounded-lg p-8 bg-[#2022253f]    ">
            <SafeAreaView>
              <View className="rounded-b-lg mb-5 bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f]   shadow-lg ">
                <TouchableOpacity
                  className=" w-full p-5 rounded-lg "
                  onPress={() =>
                    navigation.navigate('StandartDetails', {
                      standart: season.standart,
                    })
                  }>
                  <Text className="text-[55px] text-start font-valorant text-white">Standart</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </View>
        </ScrollView>
      )}
    </LinearGradient>
  );
};
