// @ts-nocheck

import { View, Text, Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

type Props =
  | {
      colorDamage: string | undefined;
      src: string | undefined;
      titleDamage: string | undefined;
      numberDamage: string | undefined;
    }
  | undefined;

export const DamageButton = ({
  colorDamage,
  src,
  titleDamage,
  numberDamage,
}: Props): React.ReactNode => {
  return (
    <View className=" flex p-2   w-[125px]  h-[130px]    rounded-lg bg-[#fcfafa18] flex-col  break-words mr-2 my-12 ">
      <View className="p-3">
        <LinearGradient
          colors={['#ffffff56', `#${colorDamage}`]}
          end={{ x: 1.0, y: 1.5 }}
          className="flex items-center justify-center  absolute bottom-2 h-12  w-16 rounded-xl  shadow-lg ">
          <Image
            source={{ uri: src }}
            className="w-[35px] h-[37px] object-center border-red-900 rounded-xl p-5"
          />
        </LinearGradient>
      </View>
      <View className="px-5 py-0.5  rounded-lg h-[93px] bg-[#ffffff56] shadow-xl w-full">
        <Text className=" item-start w-full  text-center text-[15px] font-bold border-b-2 rounded-sm">
          {titleDamage}
        </Text>
        <Text className="text-4xl  font-bold text-center py-2 border-b-2  border-b-[#ffffff56] bg-[#ffffff2a] rounded-lg shadow-xl h-11 my-1 ">
          {numberDamage}
        </Text>
      </View>
    </View>
  );
};
