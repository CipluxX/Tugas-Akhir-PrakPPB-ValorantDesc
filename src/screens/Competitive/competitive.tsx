// @ts-nocheck

import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ValorantLoader } from '../../components/Loaders/ValorantLoader';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import CoreTitle from '../../components/Headers/CoreTitle';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation';

import { useNavigation } from '@react-navigation/native';

type OverViewStackNavigation = StackNavigationProp<RootStackParamList>;

export const Competitive = (): React.ReactNode => {
  const navigation = useNavigation<OverViewStackNavigation>();

  const [comp, setComp] = useState<Array<any>>([]);
  const [view, setView] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/competitivetiers')
      .then((res) => {
        const { data } = res.data;
        setComp(data);
      })
      .catch((err) => alert(err));

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
      {comp == false ? (
        <ValorantLoader />
      ) : (
        <ScrollView className="mt-10">
          <CoreTitle title="Competitive" />
          <SafeAreaView className="w-full h-full rounded-lg p-8 bg-[#2022253f]">
            {comp.map((item, index) => {
              const { tiers } = item;
              const data = tiers;
              // console.log(data);
              return (
                <SafeAreaView
                  key={item.uuid}
                  className="rounded-b-lg mb-5 bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f]   shadow-lg ">
                  <TouchableOpacity
                    className=" w-full p-5 rounded-lg "
                    onPress={() =>
                      navigation.navigate('CompDetails', {
                        data: data,
                        asset: item.assetObjectName,
                      })
                    }>
                    <View className="flex  justify-center flex-row gap-12 items-center">
                      <Text className="text-[60px] text-start font-valorant text-white">
                        Episode
                      </Text>
                      <Text className="text-[55px] text-start font-valorant text-white">
                        {index}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </SafeAreaView>
              );
            })}
          </SafeAreaView>
        </ScrollView>
      )}
    </LinearGradient>
  );
};

const styles = {
  container: 'flex-1 p-6 ',
  main: ' max-w-[1020px] p-4 mt-2   ',
  title:
    'text-[64px]  mb-2 font-valorant text-xl p-2  text-white text-center bg-[#ffffff36]  rounded-xl',
  subtitle: ' text-white text-center text-xl font-valorant font-bold ',
};
