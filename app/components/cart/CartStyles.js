import {StyleSheet} from 'react-native'
import {width} from '../../config/constants'
// | Qty |      Name    | Price //
//    2    Small Doner  | 5.50
module.exports = StyleSheet.create({
  CartContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  CartProductContainer: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderBottomWidth: 0.2
  },
  CartItem: {
    justifyContent: 'space-around',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: width
  },
  totalContainer: {
    flex: 1
  }

})
