import React from 'react';

function Book(props) {
    return(
        <div className="Book">
            <h2>{props.title}</h2>
            Author: {props.author}
            Price {props.price}
            <p>{props.description}</p>
            <img src="#" />
        </div>
    );
}

export default Book;