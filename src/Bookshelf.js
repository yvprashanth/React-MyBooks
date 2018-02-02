import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {
  render () {
    return (
      <div>
        {this.props.books.map((book) => {
           <Book authors={book.authors} title={book.imageLinks.thumbnail} title={book.title} />
         })}
      </div>
    )
  }
}

export default Bookshelf
