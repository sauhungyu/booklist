import book_list from "../containers/book_list";


// below State argument is not application state, onlt the state
// this reducer is responsible for
// when application first starts, user not click the book yet,
// no book is selected yet
// redux will say return is undefined but it is not allowed
// so we define state = null
// or user isn't do anything else also return state only
export default function(state =null, action){
switch(action.type){

    case "BOOK_SELECTED" : 
        return action.payload;
    
}
return state;

}