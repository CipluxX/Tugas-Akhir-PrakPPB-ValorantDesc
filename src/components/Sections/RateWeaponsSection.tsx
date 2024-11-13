// @ts-nocheck

import { ScrollView, View, Text } from 'react-native';
import { W, wx } from 'windstitch';

const concept = wx({
  variants: {
    primary: {
      view: `bg-[#ffffff31] w-auto p-2 rounded-lg shadow-lg mt-2 mr-1`,
      text: `font-bold text-white`,
    },
  },
});

type Concept<T> = {
  [key in keyof T]: W.Infer<typeof concept>;
};

type Tag = { view: void } | { text: void };

const primaryView: Concept<Tag> = {
  view: concept({
    primary: 'view',
  }),
};

const primaryText: Concept<Tag> = {
  view: concept({
    primary: 'text',
  }),
};

namespace WeaponSection {
  type Elem = React.ReactNode;

  export const Cost = ({ children = <View></View> }: { children: Elem }): Elem => {
    return <View>{children}</View>;
  };
  export const Category = ({ children = <View></View> }: { children: Elem }): Elem => {
    return <View>{children}</View>;
  };
  export const FireRate = ({ children = <View></View> }: { children: Elem }): Elem => {
    return <View>{children}</View>;
  };
  export const MagazineSize = ({ children = <View></View> }: { children: Elem }): Elem => {
    return <View>{children}</View>;
  };
}

type Props = {
  cost: undefined;
  category: undefined;
  fireRate: undefined;
  magazineSize: undefined;
};

type New<T> = {
  [key in keyof T]: T;
};

export const RateWeaponsSection = ({ cost, category, fireRate, magazineSize }: New<Props>) => {
  return (
    <ScrollView horizontal={true} className="gap-2 w-auto px-4 py-2 rounded-lg   ">
      <WeaponSection.Cost>
        {typeof cost === 'number' && (
          <View className={typeof cost === 'number' ? (primaryView.view as string) : ''}>
            <Text className={primaryText.view as string}>Cost Rate: {cost} </Text>
          </View>
        )}
      </WeaponSection.Cost>

      <WeaponSection.Category>
        {typeof category === 'string' && (
          <View className={typeof category === 'string' ? (primaryView.view as string) : ''}>
            <Text className={primaryText.view as string}> {category} </Text>
          </View>
        )}
      </WeaponSection.Category>

      <WeaponSection.FireRate>
        {typeof fireRate === 'number' && (
          <View className={typeof category === 'string' ? (primaryView.view as string) : ''}>
            <Text className={primaryText.view as string}>Fire Rate: {fireRate} </Text>
          </View>
        )}
      </WeaponSection.FireRate>

      <WeaponSection.MagazineSize>
        {typeof magazineSize === 'number' && (
          <View className={typeof category === 'string' ? (primaryView.view as string) : ''}>
            <Text className={primaryText.view as string}>Magazine Size: {magazineSize} </Text>
          </View>
        )}
      </WeaponSection.MagazineSize>
    </ScrollView>
  );
};
