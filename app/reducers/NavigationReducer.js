import { AppRoutes } from '../config/Routes';

const initialNavState = {
  nav: AppRoutes.router.getStateForAction(
    AppRoutes.router.getActionForPathAndParams('Home'),
  )
};

export const navReducer = (state = initialNavState.nav, action) => {
  const nextState = AppRoutes.router.getStateForAction(action, state);
  return nextState || state;
};