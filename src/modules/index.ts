import { combineReducers } from 'redux';

import cart from './cart/reducer';
import games from './games/reducer';

export const rootReducer = combineReducers({ cart, games });
