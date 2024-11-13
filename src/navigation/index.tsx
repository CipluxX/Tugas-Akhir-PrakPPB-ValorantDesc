import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Overview from '../screens/overview';
import { Details as AgentDetails } from '../screens/Agents/details';
import { Details as WeaponsDetails } from '../screens/Weapons/details';
import { Details as StandartDetails } from '../screens/Seasons/Standart';
import { Details as CompetitiveDetails } from '../screens/Seasons/Competitive';

import { Agents } from '../screens/Agents/agents';
import Weapons from '../screens/Weapons/weapons';

import { TypeAgent as Agent } from '../features/zod/agentDetails';
import { Maps } from '../screens/Maps/maps';
import { MapsDetails } from '../screens/Maps/details';
import { Competitive } from '../screens/Competitive/competitive';
import { CompDetails } from '../screens/Competitive/details';
import { Seasons } from '../screens/Seasons/seasons';

export type RootStackParamList = {
  Overview: undefined;
  Agents: undefined;
  AgentDetails: Agent;
  Weapons: undefined;
  WeaponsDetails: any;
  Maps: undefined;
  MapsDetails: any;
  Competitive: undefined;
  CompDetails: any;
  Seasons: undefined;
  StandartDetails: any;
  CompetitiveDetails: any;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Overview">
        <Stack.Screen
          name="Overview"
          component={Overview}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#c54653',
            },
          }}
        />
        <Stack.Screen
          name="AgentDetails"
          component={AgentDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Agents"
          component={Agents}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#c54653',
            },
          }}
        />
        <Stack.Screen
          name="Weapons"
          component={Weapons}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#c54653',
            },
          }}
        />
        <Stack.Screen
          name="WeaponsDetails"
          component={WeaponsDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Maps"
          component={Maps}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#c54653',
            },
          }}
        />
        <Stack.Screen name="MapsDetails" component={MapsDetails} options={{ headerShown: false }} />
        <Stack.Screen
          name="Competitive"
          component={Competitive}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#c54653',
            },
          }}
        />
        <Stack.Screen name="CompDetails" component={CompDetails} options={{ headerShown: false }} />
        <Stack.Screen
          name="Seasons"
          component={Seasons}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#c54653',
            },
          }}
        />
        <Stack.Screen
          name="StandartDetails"
          component={StandartDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CompetitiveDetails"
          component={CompetitiveDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
