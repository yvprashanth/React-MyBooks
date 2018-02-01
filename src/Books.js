import { React } from 'react'
import { App } from './App.css'
import { Book } from "./Book";


class Books extends React.Component {
  render () {
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>Currently Reading</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            <li>
              <Book authors={this.props.authors} title={this.props.title} image={this.props.image} />
            </li>
            <li>
              <Book authors={this.props.authors} title={this.props.title} image={this.props.image} />
            </li>
          </ol>
        </div>
      </div>
    )
  }
}
