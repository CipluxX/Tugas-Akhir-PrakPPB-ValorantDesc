// @ts-nocheck

import { RouteProp, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';

import { RootStackParamList } from '../../navigation';

type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'AgentDetails'>;

const Component = (): React.ReactNode => {
  const router = useRoute<DetailsSreenRouteProp>();

  return (
    <View>
      <View className="flex-1 flex-col justify-start gap-y-2 py-2 mx-5 ">
        <View className="h-auto  bg-[#ffffff8f] rounded-lg   shadow-lg ">
          <View className="flex flex-row items-center  justify-around mt-2 p-2  w-full  ">
            <View className="flex flex-col w-[150px] h-auto bg-[#ffffff46]  items-center rounded-lg pt-2 shadow-lg ">
              <View className=" ">
                <Image
                  source={{ uri: router.params?.iconHabilities?.one }}
                  className="h-[80px] w-[80px]"
                />
              </View>
              <Text className="p-2 text-xl w-full  font-valorant  text-center   ">
                {router.params?.nameHabilities?.one}
              </Text>
            </View>
            <View className="bg-[#ffffff42]   p-2 rounded-lg">
              <Text className="w-[200px] h-[120px] text-start text-[14px] font-bold    ">
                {router.params?.habilities?.one}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-1 flex-col justify-start gap-y-2 py-2 mx-5 ">
        <View className="h-auto  bg-[#afff9169] rounded-lg w-full   shadow-lg ">
          <View className="flex flex-row items-center  mt-2 p-2  w-full justify-around  ">
            <View className="flex flex-col w-[150px] h-auto bg-[#ffffff46]  items-center rounded-lg pt-2 shadow-lg">
              <Image
                source={{ uri: router.params?.iconHabilities?.two }}
                className="h-[80px] w-[80px]"
              />
              <Text className="p-2 text-xl w-full  font-valorant  text-center ">
                {router.params?.nameHabilities?.two}
              </Text>
            </View>
            <View className="bg-[#ffffff42] p-2 rounded-lg">
              <Text className="w-[200px] h-[120px] text-start text-[14px] font-bold  ">
                {router.params?.habilities?.two}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-1 flex-col justify-start gap-y-2 py-2 mx-5 ">
        <View className="h-auto  bg-[#9988f854] rounded-lg w-full   shadow-lg ">
          <View className="flex flex-row items-center  mt-2 p-2  w-full justify-around ">
            <View className="flex flex-col w-[150px] h-auto bg-[#ffffff46]  items-center rounded-lg pt-2 shadow-lg">
              <Image
                source={{ uri: router.params?.iconHabilities?.three }}
                className="h-[80px] w-[80px]"
              />
              <Text className="p-2 text-xl w-full  font-valorant  text-center ">
                {router.params?.nameHabilities?.three}
              </Text>
            </View>
            <View className="bg-[#ffffff42] p-2 rounded-lg">
              <Text className="w-[200px] h-[120px] text-start text-[14px] font-bold  ">
                {router.params?.habilities?.three}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-1 flex-col justify-start gap-y-2 py-2 mx-5 ">
        <View className="h-auto  bg-[#f2f54469] rounded-lg w-full   shadow-lg ">
          <View className="flex flex-row items-center  mt-2 p-2  w-full justify-around  ">
            <View className="flex flex-col w-[150px] h-auto bg-[#ffffff46]  items-center rounded-lg pt-2 shadow-lg">
              <Image
                source={{ uri: router.params?.iconHabilities?.ult }}
                className="h-[80px] w-[80px]"
              />
              <Text className="p-2 text-xl w-full  font-valorant  text-center ">
                {router.params?.nameHabilities?.ult}
              </Text>
            </View>
            <View className="bg-[#ffffff42] p-2 rounded-lg">
              <Text className="w-[200px] h-[120px] text-start text-[14px] font-bold  ">
                {router.params?.habilities?.ult}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export const Details = () => {
  const router = useRoute<DetailsSreenRouteProp>();

  return (
    <LinearGradient
      colors={[`#${router.params?.colors.one}`, `#${router.params?.colors?.three}`]}
      start={{ x: 0.1, y: 0.0 }}
      accessible
      className={styles.container}>
      <ScrollView>
        <ImageBackground
          source={{ uri: router.params?.background }}
          className="rounded-b-lg  bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f]    shadow-2xl">
          <View className={styles.main}>
            <Text className={styles.title}>"{router.params?.description}"</Text>
            <Image
              source={{
                uri: router.params?.image,
              }}
              className="w-full h-[960px] object-contain  rounded-lg "
            />
          </View>
        </ImageBackground>
      </ScrollView>

      <ScrollView>
        <View className="rounded-b-lg   bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f]   shadow-2xl  w-auto h-auto mt-5 py-2 ">
          <View className="p-2 bg-red-200   rounded-lg bg-[#ffffff18] flex items-center  ">
            <Text className="text-5xl p-2 font-valorant text-white shadow-lg bg-[#ffffff3f] text-center rounded-b-lg">
              {router.params?.role?.role}
            </Text>
            <Text>{router.params?.role?.description}</Text>
          </View>
          <Component />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = {
  container: 'flex-1 p-6 ',
  main: ' max-w-[960]    ',
  title:
    'text-[64px]   font-valorant text-xl p-2 text-white text-center bg-[#ffffff36]  rounded-xl',
  subtitle: ' text-white text-center text-xl font-valorant font-bold ',
};
