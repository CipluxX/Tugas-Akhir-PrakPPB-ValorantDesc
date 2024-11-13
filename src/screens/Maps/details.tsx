// @ts-nocheck

import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'MapsDetails'>;

const Location = ({ data, target }: { data: string; target: string }) => {
  return (
    <View className="flex items-center justify-between w-[140px]  h-[80px] bg-[#ffffff] rounded-lg overflow-hidden shadow-xl">
      <View className="flex flex-col items-center justify-end px-2 py-4 h-auto ">
        <Text className=" border-b-4 border-[#0a040438]  rounded-md font-bold  text-6xl  [font-family:'Switzer-Semibold',Helvetica]  text-black text-[40.4px] text-center  ">
          {data}
        </Text>
        <Text className=" w-fit font-bold text-xl [font-family:'Switzer-Semibold',Helvetica]  text-[#bdbdbd]  text-center tracking-[-0.11px] leading-[normal] relative top-1 ">
          {target}
        </Text>
      </View>
    </View>
  );
};

export const MapsDetails = (): React.ReactNode => {
  const router = useRoute<DetailScreenRouteProp>();

  const [call, setCall] = useState<Array<any>>([]);

  useEffect(() => {
    setCall(router.params?.callouts);
  }, []);

  return (
    <LinearGradient
      colors={[`#0a212b`, `#ce4352`]}
      start={{ x: 1.7, y: 0.4 }}
      accessible
      className={styles.container}>
      <ScrollView>
        <View className="rounded-b-lg   bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f] text-3xl    shadow-2xl h-auto">
          <View className={styles.main}>
            <Text className={styles.title}>{router.params?.description}</Text>
            <View className=" items-start ">
              <View className=" flex flex-row   justify-evenly  shadow-3xl rounded-lg mx-2 h-auto my-2 bg-[#ffffff18] p-2  ">
                <Image
                  source={{ uri: router.params?.icon }}
                  className="w-[80%] h-[65px] object-cover rounded-lg"
                />
                <Text className="px-1.0 my-4  text-3xl font-valorant text-center justify-center font-bold text-white ml-2 ">
                  {String(router.params?.tatical).split('Sites')}
                </Text>
              </View>
            </View>
            <View className=" flex items-center justify-center h-[550px] bg-[#ffffff18] rounded-lg  m-2 ">
              <Image
                source={{ uri: router.params?.display }}
                className=" relative w-[100%] h-[100%] object-cover"
              />
            </View>
          </View>
          <View className="px-4 py-2 h-auto ">
            <Text className="text-center font-valorant text-white text-6xl border-b-8 mx-12 rounded-lg border-[#ffffff3f]">
              Statistics
            </Text>
            <ScrollView className="my-2  rounded-lg bg-[#ffffff18] px-2 w-auto h-[650px]">
              {call !== null &&
                call.map((item, index) => {
                  return (
                    <View
                      className=" flex flex-col   bg-[#ffffff18]  w-auto rounded-xl h-[180px] p-6   my-1"
                      key={index}>
                      <View className="flex flex-row justify-center">
                        <Text className="font-valorant text-md text-white text-3xl border-b-4 mr-auto border-[#ffffff18] ">
                          {item?.regionName}
                        </Text>
                        <Text className="text-md font-bold  text-3xl text-gray-200 border-b-4 border-[#ffffff18] px-auto">
                          {item?.superRegionName}
                        </Text>
                      </View>
                      <View className="flex w-full h-auto py-2 justify-around  flex-row ">
                        <View>
                          <Location data={item?.location.y} target="Location Y" />
                        </View>
                        <View>
                          <Location data={item?.location.x} target="Location X" />
                        </View>
                      </View>
                      <View className="flex flex-row items-center justify-center w-full my-6"></View>
                    </View>
                  );
                })}
            </ScrollView>
          </View>
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
