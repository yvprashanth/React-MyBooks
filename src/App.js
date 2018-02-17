import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from "./Books";
import _ from "lodash";
class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.updateShelf = this.updateShelf.bind(this);
    }

    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books });
        })
    }

    updateShelf(book, event) {
        event.preventDefault();
        // This is the value that has been chosen
        var newBooks = this.state.books;
        var index = _.findIndex(newBooks, function(num) {
            return num.id === book.id
        });
        if (index > -1) {
          newBooks.splice(index,1);
        }
        // debugger;
        book.shelf = event.target.value;
        newBooks.push(book);
        this.setState({
          books: newBooks
        });
        // newBooks.splice()
        console.log(event.target.value);
        console.log(book);
    }

    render() {
        return ( <
            div className = "app" > {
                this.state.showSearchPage ? ( <
                    div className = "search-books" >
                    <
                    div className = "search-books-bar" >
                    <
                    a className = "close-search"
                    onClick = {
                        () => this.setState({ showSearchPage: false })
                    } > Close < /a> <
                    div className = "search-books-input-wrapper" > {
                        /*
                                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                          You can find these search terms here:
                                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                          you don't find a specific author or title. Every search is limited by search terms.
                                        */
                    } <
                    input type = "text"
                    placeholder = "Search by title or author" / >

                    <
                    /div> < /
                    div > <
                    div className = "search-books-results" >
                    <
                    ol className = "books-grid" > < /ol> < /
                    div > <
                    /div>
                ) : ( <
                    div className = "list-books" >
                    <
                    div className = "list-books-title" >
                    <
                    h1 > Prashanth Yerramilli Bookstore < /h1> < /
                    div > <
                    div className = "list-books-content" >
                    <
                    div >
                    <
                    Books books = { this.state.books }
                    updateShelf = { this.updateShelf }
                    /> < /
                    div > <
                    /div> <
                    div className = "open-search" >
                    <
                    a onClick = {
                        () => this.setState({ showSearchPage: true })
                    } > Add a book < /a> < /
                    div > <
                    /div>
                )
            } <
            /div>
        )
    }
}

export default BooksApp