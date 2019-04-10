import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";
  
// below required a mapping of key(books) and values(booksReducer)
const rootReducer = combineReducers(
  {
  
  books: BooksReducer,
  activeBook: ActiveBook
}

);


export default rootReducer;







