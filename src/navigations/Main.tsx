import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import Tools from '../screens/Tools';
import BirthdayDasboard from '../screens/BirthdayDasboard';
import AgeCalculator from '../screens/AgeCalculator';
import GreetingMessages from '../screens/GreetingMessages';

/* 
- Age Difference
- Birthday Countdown
- Date Calculator
- Greeting Messages
*/

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Tools" component={Tools} />
      <Stack.Screen name="BirthdaysDashboard" component={BirthdayDasboard} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="AgeCalculator" component={AgeCalculator} />
      <Stack.Screen name="GreetingMessages" component={GreetingMessages} />
    </Stack.Navigator>
  );
}

export default Main