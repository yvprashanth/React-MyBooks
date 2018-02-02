import React from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends React.Component {
  render () {
    const {title, authors, imgLinks, updateShelf} = this.props
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${imgLinks}` }}>
          </div>
          <ShelfChanger testEvent={updateShelf}/>
        </div>
        <div className='book-title'>
          {title}
        </div>
        <div className='book-authors'>
          {authors.join(', ')}
        </div>
        
      </div>
    )
  }
}

export default Book