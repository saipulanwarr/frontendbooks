import { combineReducers } from 'redux';

import books from './books';
import auth from './auth';

export default combineReducers({
    books,
    auth
});