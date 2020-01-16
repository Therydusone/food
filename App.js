import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen.js'
import ResultsShowScreen from './src/screens/ResultsShowScreen.js';



const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Wyszukiwarka restauracji'
  }
});

export default createAppContainer(navigator);