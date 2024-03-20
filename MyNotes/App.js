
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeUi } from './Home';
import { NewNoteUi } from './NewNote';
import { SignInUi } from './SignIn';
import { SignUpUi } from './SignUp';

const Stack = createNativeStackNavigator();

function App() {

  const ui = (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='SignIn' component={SignInUi} />
        <Stack.Screen name='SignUp' component={SignUpUi} />
        <Stack.Screen name='Notes' component={HomeUi} />
        <Stack.Screen name='New Note' component={NewNoteUi} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  return ui;
}
export default App;

