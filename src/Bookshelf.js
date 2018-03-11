import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {
  render () {
    const {books} = this.props
    return (
      <div>
        <ol className="books-grid">
          {books.length > 0 && books.map((book) => (
            <li key={book.id}>
              <Book title={book.title} authors={book.authors} 
                imgLinks={book.imageLinks} books={books} updateShelf={this.props.updateShelf} book={book}/>
              </li>
          ))}
         </ol>
      </div>
    )
  }
}

export default Bookshelf
