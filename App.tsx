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
import UsersList from './src/screens/UsersList';
import { theme } from './src/global/styles/theme';

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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Users" component={UsersList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
