import React, {Component} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Debounce } from "react-throttle";
import Books from "./Books";
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'

class SearchPage extends Component{
    constructor(){
        super();
    }

    state = {
        books : [], 
        query : ''
    }

    getInfo = () => {
        BooksAPI.search(this.state.query.trim()).then((data) => {
            this.setState({
                books : data
            })
        })
    }

    handleInputChange = (event) => {
        this.setState({
            query : event.target.value
        }, () => {
            if(this.state.query && this.state.query.length > 1){
                this.getInfo()
            } else {
                this.setState({
                    books : []
                })
            }
        })
    }
   render(){
    let styles = {
        backgroundColor: 'white'          
    }
       return(
           
           <form>
               <Debounce time="400" handler="onChange">
                <input placeholder="Search for a book..."
                ref={input => this.search = input}
                onChange={this.handleInputChange} />
               </Debounce>
               <div style={styles}>
                    <Bookshelf books={this.state.books} updateShelf={this.props.updateShelf}/>
                </div>
           </form>
       )
   }
}

export default SearchPage;