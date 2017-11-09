import { StackNavigator } from 'react-navigation'
import ImageNav from '../components/ImageNav/ImageNav'
import Menu from '../components/Menu/Menu'
import Dressings from '../components/Dressings/Dressings'

export const AppRoutes = StackNavigator({
  Home: {
    screen: ImageNav
  },
  Menu: {
    screen: Menu
  },
  Dressings: {
    screen: Dressings
  },
})