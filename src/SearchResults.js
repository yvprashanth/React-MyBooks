import React from "react";
import Book from './Book'

class SearchResults extends React.Component {
    render(){
        const {books} = this.props
        return(
            <div className="search-result">
                <ol className="books-grid">
                    {books != null && books.map((book) => (
                        <li key={book.id}>
                        <Book title={book.title} authors={book.authors} 
                            imgLinks={book.imageLinks.thumbnail} books={books} updateShelf={this.props.updateShelf} book={book}/>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default SearchResults