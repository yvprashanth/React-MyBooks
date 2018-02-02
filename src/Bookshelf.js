import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {
  render () {
    const {books} = this.props
    return (
      <div>
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book title={book.title} authors={book.authors} 
                imgLinks={book.imageLinks.thumbnail} books={books} updateShelf={this.props.updateShelf}/>
              </li>
          ))}
         </ol>
      </div>
    )
  }
}

export default Bookshelf
