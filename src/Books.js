import React from 'react'
import Bookshelf from './Bookshelf'

class Books extends React.Component {

  render () {
    const shelfTypes = [
      {
        type: 'currentlyReading',
        title: 'Currently Reading'
      },
      {
        type: 'wantToRead',
        title: 'Want To Read'
      },
      {
        type: 'read',
        title: 'Read'
      }
    ]
    return (
        <div className="list-books-content">
            {shelfTypes.map((shelfType, index) => {
                const shelfBooks = this.props.books.filter(book => book.shelf === shelfType.type)
                return (
                <div key={index}>
                    <div className='bookshelf'>
                    <h2 className='bookshelf-title'>{shelfType.title}</h2>
                    <div className='bookshelf-books'>
                        <Bookshelf books={shelfBooks} updateShelf={this.props.updateShelf}/>
                    </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
  }
}

export default Books