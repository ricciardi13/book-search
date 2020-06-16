import React, { Component } from 'react';
import './App.css';
import BookSearchApp from './BookSearchApp/BookSearchApp';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount(searchTerm) {
    const apiKey = "AIzaSyBjvP5METNfMYFKOPugKmxgnvpmGWrMlXQ";    
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;
    fetch(url)
      .then(results => {
        if(!results.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return results;
      })
      .then(results => results.json())
      .then(data => {
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }
  
  render(){
    return (
      <div className="App">
        <BookSearchApp
          books={this.state.books} />
      </div>
    );
  }  
}


