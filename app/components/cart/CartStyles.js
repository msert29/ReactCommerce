import {StyleSheet} from 'react-native'

// | Qty |      Name    | Price //
//    2    Small Doner  | 5.50
module.exports = StyleSheet.create({
  CartContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  CartItem: {
    justifyContent: 'space-around',
    flex: 3,
    flexDirection: 'row',
    padding: 20,
    margin: 20,
    marginBottom: 1,
    borderBottomWidth: 0.5
  }

})
