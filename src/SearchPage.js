import React from "react";
import Book from './Book'
import {DebounceInput} from 'react-debounce-input';
import * as BooksAPI from './BooksAPI';

class SearchPage extends React.Component {
    constructor(){
        super();
        this.startSearch = this.startSearch.bind(this);
    }

    state = {
        searchResults : [], 
        searchTerm : ''
      }

    startSearch(event){
        // event.preventDefault();
        BooksAPI.search(event.target.value).then((result) => {
            debugger;
          this.setState({
            searchResults : result,
            searchTerm : event.target.value
          })
        })
      }

    render(){
        const {books} = this.props
        return(
            <div className="search-books-input-wrapper">
                <DebounceInput
                minLength={3}
                debounceTimeout={400}
                onChange={this.startSearch} />

                 <div className="search-result">
                    <ol className="books-grid">
                        {this.state.searchResults != null && this.state.searchResults.map((book) => (
                            <li key={book.id}>
                            <Book title={book.title} authors={book.authors} 
                                imgLinks={book.imageLinks.thumbnail} books={books} updateShelf={this.props.updateShelf} book={book}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage