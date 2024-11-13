import { ReactNode, useCallback, useContext } from 'react';
import { SafeAreaView, TouchableOpacity, Image, View, Linking } from 'react-native';
import { wx, W } from 'windstitch';
import { AnchorContext } from './AnchorCoxtext';

const concept = wx({
  variants: {
    concept: {
      primary: `mb-5 flex items-center  flex-row justify-center gap-6  `,
      secondary: `h-[45px] w-[45px] m-2 rounded-full  object-center `,
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

export const CoreFooter = (): ReactNode => {
  const value = useContext(AnchorContext);

  const callBackAnchor = useCallback((tag: string) => {
    const url = tag;
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {
          throw new Error('invalid');
        }
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <View className={styles.primary}>
      <SafeAreaView>
        <AnchorContext.Provider value={value}>
          <View className=" flex flex-row  justify-between rounded-full gap-12 mt-0">
            <TouchableOpacity onPress={() => callBackAnchor(value.discord?.anchor)}>
              <Image
                source={{
                  uri: value.discord.source,
                }}
                className={styles.secondary}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => callBackAnchor('https://twitter.com/ValorantAPI')}>
              <Image
                source={{
                  uri: 'https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png',
                }}
                className={styles.secondary}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => callBackAnchor('https://github.com/97revenge/valorant-app')}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
                }}
                className={styles.secondary}
              />
            </TouchableOpacity>
          </View>
        </AnchorContext.Provider>
      </SafeAreaView>
    </View>
  );
};
