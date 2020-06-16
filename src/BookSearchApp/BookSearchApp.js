import React, {Component} from 'react';
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import BookList from "../BookList/Booklist";

export default class BookSearchApp extends Component {
    render() {
        return(
            <div className="BookSearchApp">
                <header>
                    <h1>Google Book Search</h1>
                    <SearchBar />
                    <Filters />
                    <BookList books={this.props.books}/>
                </header>
            </div>
        );
    }
}