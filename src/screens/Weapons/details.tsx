// @ts-nocheck

import { View, Text, ScrollView, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../../navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { DamageButton } from '../../components/Buttons/DamageButton';
type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'WeaponsDetails'>;

type StatsSchema = {
  colorDamage: string;
  numberDamage: string | number;
  titleDamage: string;
  src: string;
};

export const Details = (): React.ReactNode => {
  const router = useRoute<DetailsSreenRouteProp>();
  const [skins, setSkins] = useState<Array<any>>([]);

  const checkoutSkins = useCallback(() => {
    type Concept = Pick<typeof router.params, 'skins'>;
    const concept: Concept = router.params?.skins;
    setSkins(concept);
  }, []);

  const concept: Array<any> = router.params?.stats;

  useEffect(() => {
    checkoutSkins();
  }, []);

  return (
    <LinearGradient
      colors={[`#0a212b`, `#ce4352`]}
      start={{ x: 1.7, y: 0.4 }}
      accessible
      className={styles.container}>
      <ScrollView>
        <View className="rounded-b-lg  bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f] text-3xl    shadow-2xl">
          <View className={styles.main}>
            <Text className={styles.title}>{router.params?.name}</Text>

            <View className="flex  my-2  p-2 bg-[#ffffff18] rounded-lg">
              <LinearGradient
                colors={['transparent', '#ffffff31']}
                className=" w-[400px] h-auto  p-2 py-2  rounded-lg items-center ">
                <Image
                  source={{ uri: router.params?.image }}
                  className="object-cover  w-[380px] h-[130px] px-2 "
                />
              </LinearGradient>
            </View>

            {typeof concept === 'undefined' ? (
              ''
            ) : (
              <View className="flex flex-col gap-y-0  w-auto  m-0 my-5 h-auto rounded-lg bg-[#ffffff18] shadow-lg  ">
                <Text className="text-center font-valorant pt-5 text-3xl text-white border-b-4 rounded-lg border-[#ffffff3f] mx-12">
                  Weapon Status
                </Text>
                <View className=" h-[250px] p-4 flex flex-row justify-evenly gap-x-3  bg-[ffff] ">
                  <ScrollView
                    horizontal={true}
                    className=" flex  px-2 w-[250px] h-full  flex-row  p-2 rounded-xl shadow-xl">
                    <DamageButton
                      colorDamage="ec5d6d"
                      numberDamage={typeof concept === 'undefined' ? '' : concept[0]?.headDamage}
                      titleDamage="Head Damage"
                      src="https://cdn-icons-png.flaticon.com/512/158/158766.png"
                    />
                    <DamageButton
                      colorDamage="40abf2"
                      numberDamage={typeof concept === 'undefined' ? '' : concept[0]?.bodyDamage}
                      titleDamage="Body Damage"
                      src="https://cdn-icons-png.flaticon.com/512/1843/1843662.png"
                    />
                    <DamageButton
                      colorDamage="9ece6a"
                      numberDamage={typeof concept === 'undefined' ? '' : concept[0]?.legDamage}
                      titleDamage="Leg Damage"
                      src="https://cdn-icons-png.flaticon.com/512/3654/3654896.png"
                    />
                    <DamageButton
                      colorDamage="ffffff"
                      numberDamage={router.params?.fireRate}
                      titleDamage="Fire Range & Rate"
                      src="https://florestaljr.com.br/wp-content/uploads/sites/628/2020/02/Target-icon.png?x21173"
                    />
                    <DamageButton
                      colorDamage="ffffff"
                      numberDamage={router.params?.magazineSize}
                      titleDamage="magazine Size"
                      src="https://cdn-icons-png.flaticon.com/512/1261/1261824.png"
                    />
                  </ScrollView>
                </View>
              </View>
            )}
          </View>
          <Text className="text-center font-valorant text-white text-6xl border-b-8 mx-28 rounded-lg border-[#ffffff3f]">
            Skins
          </Text>
          {skins.map((item) => {
            return (
              <View className=" p-2 mt-5 " key={item.uuid}>
                <View className={styles.container}>
                  <Text className="flex flex-col font-valorant text-white text-2xl px-2">
                    {item.displayName}
                  </Text>
                  <ScrollView horizontal={true} className="flex flex-row gap-16 py-12">
                    <View className="  bg-[#ffffff0e] w-auto h-auto rounded-lg  items-start px-5 justify-center">
                      <Image
                        source={{ uri: item.displayIcon }}
                        className=" object-fill w-[320px] h-[120px]  "
                      />
                    </View>
                  </ScrollView>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = {
  container: 'flex-1 p-6 bg-red-200  shadow-lg  bg-[#ffffff3f] ',
  main: ' max-w-[960] p-2   ',
  title:
    'text-[64px]  mb-2 font-valorant text-xl p-2  text-white text-center bg-[#ffffff36]  rounded-xl',
  subtitle: ' text-white text-center text-xl font-valorant font-bold ',
};
