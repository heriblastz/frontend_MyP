import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Landing from './src/assets/Landing'
import Login from './src/assets/Login'
import Register from './src/assets/Register'
import Redirect from './src/assets/Redirect'
import Admin from './src/assets/Admin'

const Navigation = createStackNavigator(
  {
    Landing : { screen : Landing},
    Login : { screen : Login},
    Register : { screen : Register},
    Redirect : {screen : Redirect},
    Admin : {screen : Admin},
  },
  {
    initialRouteName : 'Landing',
  }
)

const Navigator = createAppContainer(Navigation)

export default Navigator