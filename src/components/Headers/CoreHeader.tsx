import { View, Text } from 'react-native';
import { wx, W } from 'windstitch';

const concept = wx({
  variants: {
    concept: {
      primary: ' border-b-2 border-white rounded-lg',
      secondary: 'font-valorant text-3xl text-center text-white',
    },
  },
});

type Concept<T> = {
  primary: T;
  secondary: T;
};

export const styles = {
  primary: concept({
    concept: 'primary',
  }),
  secondary: concept({
    concept: 'secondary',
  }),
} satisfies Concept<W.Infer<typeof concept>>;

export const CoreHeader = ({ children }: { children?: React.ReactNode }) => {
  return (
    <View className={styles.primary}>
      <Text className={styles.secondary}>core content</Text>
      {children}
    </View>
  );
};
