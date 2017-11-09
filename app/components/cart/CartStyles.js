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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
    flex: 4
  },
  totalContainer: {
    flex: 1
  }

})
