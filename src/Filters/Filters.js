import React, { Component } from 'react';

export default class Filters extends Component {
    render() {
        return (
            <form className="Filters">
                <label htmlFor="printType">Print Type:</label>
                <select id="printType" name="printType">
                    <option value="all">All</option>    
                </select>
                <label htmlFor="bookType">Book Type:</label>
                <select id="bookType" name="bookType">
                    <option value="noFilter">No Filter</option>    
                </select> 
            </form>
        );
    }
}
