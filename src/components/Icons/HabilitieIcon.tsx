import { W, wx } from 'windstitch';

import { View, Image } from 'react-native';

const concept = wx({
  variants: {
    concept: {
      primary: `bg-[#ffffff31] w-auto p-2 rounded-lg shadow-lg`,
      secondary: `w-[45px] h-[45px] p-2 rounded-lg`,
    },
  },
});

type Concept<T> = {
  primary: T;
  secondary: T;
};

const styles = {
  primary: concept({
    concept: 'primary',
  }),
  secondary: concept({
    concept: 'secondary',
  }),
} satisfies Concept<W.Infer<typeof concept>>;

export const HabilitieIcon = ({ item }: { item: string }): React.ReactNode => {
  return (
    <View className={styles.primary}>
      <Image source={{ uri: item }} className={styles.secondary} />
    </View>
  );
};
