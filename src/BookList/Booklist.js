import React from "react";
import Book from "../Book/Book";

export default function BookList(props) {
    const books = props.books;
    const bookList = books.map((book) =>
        <Book
            title={props.title}
            author={props.author}
            price={props.price}
            description={props.description}
            imgSrc={props.imgSrc}
        />
    );
    return(
        <ul className="BookList">
            {bookList}
        </ul>
    );
}