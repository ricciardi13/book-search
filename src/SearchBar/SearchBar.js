import React, { Component } from 'react';

export default class SearchBar extends Component {
    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="search">Search:</label>
                <input name="search" id="search" type="text"></input>
                <input type="submit">Search</input>
            </form>
        );
    }
}