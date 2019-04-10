import React, {Component} from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import {bindActionCreators } from "redux";


// react component like this one relies on react-redux function { connect }
// to interlink react component and state data redux together
// the power of mapStateToProps is one to do the job
// those(state) inside the function do return all the 
// necessary redux state data we want - book_list created
// in reducer function reducer_books like so
// below this.props.books will surface once mapStateToProps has been
// set, state data is mapping to components which needs it by props



class BookList extends Component {

    renderList() {

    return this.props.books.map((book) => {

        return (
   <li 
     
   key={book.title} 
   onClick={() => this.props.selectBook(book)}
   className="list-group-item">  book.title  </li>
        )
    }
    )
    }



     render() {

   //   console.log(this.props.abcd) // => "this is testing"
      return (
    <ul className="list-group col-sm-4">
    
    {this.renderList()}
    
    
    
    </ul>



      )


     }


}

const mapStateToProps = (state) => {

//whatever is returned will show up as props
// inside of book_list,ends up return as

return {     

  //abcd: "this is testing"

  books: state.books
};
};

//Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
// whenever selectBook is called, the result should be passed
// to all of our reducers
  return bindActionCreators({selectBook:  selectBook}, dispatch)
}


//Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);