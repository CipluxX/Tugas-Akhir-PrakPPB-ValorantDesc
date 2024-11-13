// @ts-nocheck

import { View, Text, Image, SafeAreaView } from 'react-native';
import { RootStackParamList } from '../../navigation';
import { useRoute, RouteProp } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../overview';
import CoreTitle from '../../components/Headers/CoreTitle';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'CompDetails'>;

export const CompDetails = (): React.ReactNode => {
  const route = useRoute<DetailsScreenRouteProp>();

  const data: Array<any> = route.params?.data;

  return (
    <LinearGradient
      colors={['#cd4855', '#6c343e', '#17232b']}
      start={{ x: 0.1, y: 0.1 }}
      accessible
      className={styles.container}>
      <ScrollView className=" w-full h-[960px] rounded-lg p-6 bg-[#2022253f] ">
        {data.map((item, index) => {
          return (
            <View className=" w-full h-auto py-3 " key={index}>
              <LinearGradient
                colors={[`#${item?.backgroundColor}`, 'transparent']}
                end={{ x: 0.7, y: 0.8 }}
                className="flex flex-row  border-t-8  border-t-[#ffffff3f]   shadow-lg  p-2 rounded-lg gap-y-2 w-auto h-auto bg-[#fff1] justify-start gap-x-[3%]">
                <SafeAreaView className=" w-[45%]">
                  <View className="flex  justify-center flex-row  py-5 w-auto  h-auto  ">
                    <Text className="text-[55px] text-start font-valorant text-white">
                      Tier {item.tier}
                    </Text>
                  </View>
                  <Text className="p-2  valorant-font text-white text-3xl text-center font-bold w-full ">
                    {item.tierName}
                  </Text>
                </SafeAreaView>
                <View className="p-2">
                  {item.largeIcon ? (
                    <Image
                      source={{ uri: item.largeIcon }}
                      className="h-[150px] w-[150px] relative"
                    />
                  ) : (
                    <Image
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/256/57/57108.png' }}
                      className="h-[150px] w-[150px] relative"
                    />
                  )}

                  <LinearGradient
                    colors={[`transparent`, 'transparent']}
                    end={{ x: 0, y: 0.9 }}
                    className="flex flex-row justify-center mt-2 py-1  h-auto  w-auto items-center rounded-lg shadow-lg ">
                    <Image
                      source={{ uri: item?.rankTriangleDownIcon }}
                      className="h-[30px] w-[30px]"
                    />
                    <Image
                      source={{ uri: item?.rankTriangleUpIcon }}
                      className="h-[30px] w-[30px]"
                    />
                  </LinearGradient>
                </View>
              </LinearGradient>
            </View>
          );
        })}
      </ScrollView>
    </LinearGradient>
  );
};
