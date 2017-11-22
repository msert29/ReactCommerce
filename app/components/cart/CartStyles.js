import { StyleSheet } from 'react-native';
import { width } from '../../config/constants';

module.exports = StyleSheet.create({
  CartContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  CartProductContainer: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderBottomWidth: 0.2,
  },
  CartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
    flex: 4,
  },
  totalContainer: {
    flex: 1,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartSummaryContainer: {
    flex: 1.5,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: 5,
    marginTop: 20
  },
  accumulatorContainer: {
    flexDirection: "column",
    flex: 0.5
  },
  totalItems: {
    alignSelf: "flex-end",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    marginRight: 15,
    padding: 5
  },
  totalPrice: {
    alignSelf: "flex-end",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    marginRight: 15,
    padding: 5
  },
  cartSummaryButtonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch"
  }
});
