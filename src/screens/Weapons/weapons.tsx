// @ts-nocheck

import axios, { AxiosResponse, AxiosError } from 'axios';
import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import {
  ViewComponent,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import CoreTitle from '../../components/Headers/CoreTitle';
import { useState, useEffect, useCallback } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation';
import { RateWeaponsSection } from '../../components/Sections/RateWeaponsSection';
import { ValorantLoader } from '../../components/Loaders/ValorantLoader';
import { reference } from '../../features/load';

export default function Weapons() {
  const [load, setLoad] = useState<Array<any>>([]);
  type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

  const [view, setView] = useState<boolean>(false);

  const navigation = useNavigation<OverviewScreenNavigationProps>();

  const referenceTime = useCallback((state: boolean, time: number) => {
    setTimeout(() => {
      setView(!state);
    }, time);
  }, []);

  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/weapons')
      .then((response) => {
        const { data } = response.data;
        setLoad(data);
      })
      .catch((error) => alert(error));

    reference(() => referenceTime(view, 1200));
  }, []);

  return (
    <LinearGradient
      colors={['#cd4855', '#6c343e', '#17232b']}
      start={{ x: 0.1, y: 0.1 }}
      accessible
      className={styles.container}>
      {view == true ? (
        <ScrollView>
          <CoreTitle title="Weapons" />
          <View className=" w-full h-full rounded-lg p-8 bg-[#2022253f]     ">
            {load.map((item) => {
              return (
                <SafeAreaView
                  key={item.uuid}
                  className=" rounded-b-lg mb-5   border-t-8  border-t-[#ffffff3f]   shadow-lg  ">
                  <TouchableOpacity
                    className="bg-[#ffffff18]"
                    onPress={() => {
                      navigation.navigate('WeaponsDetails', {
                        name: item.displayName,
                        skins: item.skins,
                        image: item.displayIcon,

                        stats: item?.weaponStats?.damageRanges as null,
                        fireRate: item?.weaponStats?.fireRate as null,
                        magazineSize: item?.weaponStats?.magazineSize as null,
                      });
                    }}>
                    <View className="flex items-start my-4 w-full p-2">
                      <Text className="font-valorant text-white text-5xl text-start ">
                        {item.displayName}
                      </Text>
                      <LinearGradient
                        colors={['transparent', '#ffffff31']}
                        start={{ x: 1.0, y: 0.5 }}
                        className="w-full h-auto  px-2 py-2  rounded-lg ">
                        <Image
                          source={{ uri: item.displayIcon }}
                          className="object-cover  w-[350px] h-[120px]      "
                        />
                      </LinearGradient>
                    </View>
                  </TouchableOpacity>
                  <LinearGradient
                    colors={['transparent', '#ffffff31']}
                    start={{ x: 0.6, y: 0.3 }}
                    className="flex  w-auto h-auto py-4 rounded-lg">
                    <RateWeaponsSection
                      cost={item.shopData?.cost}
                      category={item.shopData?.category}
                      fireRate={item.weaponStats?.fireRate}
                      magazineSize={item.weaponStats?.magazineSize}
                    />
                  </LinearGradient>
                </SafeAreaView>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <ValorantLoader />
      )}
    </LinearGradient>
  );
}

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
  container: 'flex-1 p-6 ',
  main: 'flex-1 max-w-[960] justify-start ',
  title: 'text-[64px] font-bold text-center',
  subtitle: 'text-4xl text-gray-700 text-center text-gray-200',
};
