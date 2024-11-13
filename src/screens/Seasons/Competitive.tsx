// @ts-nocheck
import { View, Text, ScrollView, SafeAreaView } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation';
import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../components/Sections/ListSection';

export const Details = () => {
  const [season, setSeason] = useState<Array<any>>([]);

  const competitiveFetch = useCallback(() => {
    axios
      .get('https://valorant-api.com/v1/seasons/competitive')
      .then((res: AxiosResponse) => {
        const { data } = res.data;
        setSeason(data);
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
    competitiveFetch();
  }, []);

  return (
    <LinearGradient
      colors={['#cd4855', '#6c343e', '#17232b']}
      start={{ x: 0.1, y: 0.1 }}
      accessible
      className={styles.container}>
      <ScrollView>
        <View className=" w-full h-full rounded-lg p-4 bg-[#2022253f]">
          {season.map((item) => {
            const { borders } = season['borders'];
            return (
              <View
                key={item.uuid}
                className="rounded-b-lg mb-5 bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f]   shadow-lg ">
                <SafeAreaView></SafeAreaView>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
