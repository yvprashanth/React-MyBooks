import React from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends React.Component {
  render () {
    const {title, authors, imgLinks, updateShelf, book, books} = this.props
    return (
      <div className='book'>
        <div className='book-top'>
          { imgLinks && imgLinks.thumbnail &&
            <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${imgLinks.thumbnail}` }}>
            </div>
          }
          
          <ShelfChanger testEvent={updateShelf} book={book} books={books}/>
        </div>
        <div className='book-title'>
          {title}
        </div>
        <div className='book-authors'>
          {authors && authors.join(', ')}
        </div>
        
      </div>
    )
  }
}

export default Book