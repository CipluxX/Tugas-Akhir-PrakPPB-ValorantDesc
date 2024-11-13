import { View, Text } from 'react-native';

export default function CoreTitle({ title }: { title: string | React.ReactNode }) {
  return (
    <View>
      <Text className="font-valorant text-7xl text-center text-white py-5">{title}</Text>
    </View>
  );
}
