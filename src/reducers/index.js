import { combineReducers } from 'redux';

import number from './number';
import title from './title';
import day from './title';

export default combineReducers ({
  number,
  title,
  day
});