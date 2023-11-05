import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import Home from './src/screens/Home';
import Results from './src/screens/Results';
import { theme } from './src/global/styles/theme';
import { StatusBar } from 'expo-status-bar';
import GlobalContext from './src/contexts';
import Repos from './src/screens/Repos';

const Stack = createNativeStackNavigator();

export default function App(): React.JSX.Element | null {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalContext>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Results" component={Results} />
            <Stack.Screen name="Repos" component={Repos} />
          </Stack.Navigator>
          <StatusBar backgroundColor="#fff" style="light" />
        </NavigationContainer>
      </GlobalContext>
    </ThemeProvider>
  );
}
