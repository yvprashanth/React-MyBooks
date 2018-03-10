import React, {Component} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Debounce } from "react-throttle";
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import _ from "lodash";

class SearchPage extends Component{

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

    calculateBooks = (passedInBooks, currentStateBooks) => {
        if (currentStateBooks){
            if (passedInBooks){
                passedInBooks.forEach(function(element){
                    currentStateBooks.forEach(function(anotherElement){
                        if(element.id === anotherElement.id){
                            anotherElement.shelf = element.shelf;
                        }
                    })
                })
                return currentStateBooks;
            } else {
                return currentStateBooks;
            }
        }
        return [];
    }

   render(){
    let styles = {
        backgroundColor: 'white'          
    }
       const { mainbooks } = this.props;
       return(
           <form>
               <Debounce time="400" handler="onChange">
                <input placeholder="Search for a book..."
                ref={input => this.search = input}
                onChange={this.handleInputChange} />
               </Debounce>
               <div style={styles}>
                   <Bookshelf books={this.calculateBooks(mainbooks, this.state.books)} updateShelf={this.props.updateShelf}/>
                </div>
           </form>
       )
   }
}

export default SearchPage;