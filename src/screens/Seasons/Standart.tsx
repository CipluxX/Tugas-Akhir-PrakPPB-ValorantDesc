// @ts-nocheck
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation';
import { useCallback, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'StandartDetails'>;

export const Details = () => {
  const route = useRoute<DetailsScreenRouteProp>();

  const [season, setSeason] = useState<Array<any>>([]);

  const stardartFetching = useCallback(() => {
    axios
      .get('https://valorant-api.com/v1/seasons')
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
    stardartFetching();
  }, []);

  return (
    <LinearGradient
      colors={[`#0a212b`, `#ce4352`]}
      start={{ x: 1.7, y: 0.4 }}
      accessible
      className={styles.container}>
      <View className="rounded-b-lg   bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f] text-3xl    shadow-2xl h-auto">
        <View className={styles.main}>
          <Text className={styles.title}>Standart</Text>
        </View>
      </View>
      <ScrollView>
        <View className=" w-full h-full rounded-lg p-4 bg-[#2022253f]  mt-4 ">
          {season.map((item) => {
            return (
              <View
                key={item.uuid}
                className="rounded-b-lg mb-5 bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f]   shadow-lg ">
                <SafeAreaView>
                  <View className=" w-full p-5 rounded-lg ">
                    <View className="flex  justify-start flex-col  items-center gap-y-2">
                      <Text className="text-[55px] text-start font-valorant text-white mb-2">
                        {item?.displayName}
                      </Text>

                      <Text className="font-bold text-white border-b-2 border-white text-xl text-center rounded-xl">
                        Start time : {String(item?.startTime).split('T0')[0]}
                      </Text>
                      <Text className="font-bold text-white border-b-2 pb-1 rounded-xl border-white text-xl">
                        End time : {String(item?.endTime).split('T0')[0]}
                      </Text>
                    </View>
                  </View>
                </SafeAreaView>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = {
  container: 'flex-1 p-6 bg-[#ffffff95] shadow-lg  shadow-lg  bg-[#ffffff3f] ',
  main: ' max-w-[1020px] p-2   ',
  title:
    'text-[64px]  mb-2 font-valorant text-xl p-2  text-white text-center bg-[#ffffff36]  rounded-xl',
  subtitle: ' text-white text-center text-xl font-valorant font-bold ',
};
