import { View, Text, TouchableOpacity } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

const InitialButton = ({
  categorie = 'undefined',
  tag,
}: {
  categorie: React.ReactNode;
  tag: string;
}) => {
  const navigation = useNavigation<OverviewScreenNavigationProps>();
  return (
    <LinearGradient colors={['transparent', '#09222b']} start={{ x: 0.6, y: 0.3 }}>
      <TouchableOpacity className={styles.button} onPress={() => navigation.navigate(tag as any)}>
        <Text className={styles.buttonText}>{categorie}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export { InitialButton };

const styles = {
  button: 'items-start border-2 border-zinc-200 rounded-b-lg shadow-md p-4',
  buttonText: ' font-valorant text-white text-3xl font-semibold text-center',
};
