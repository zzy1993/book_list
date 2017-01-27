import React, { Component } from 'react';

import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators} from 'redux';


class BookList extends Component{
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
            className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

    render(){
      return (
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      );
    }
}

// State and data
function mapStateToProps(state){
  return {
    books: state.books
  };
}

// Anything returned will end up as props on BookList container

function mapDispatchToProps(dispatch){
  // Whenever selectBook is called,
  // result passed to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote booklist from a component to a container
// it needs to know about the new dispatch method , selectBook,
// make available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);