import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';

// При отображении этого компонента он должен загружать данные
// Значить этот компонент должен реализовываться в виде клсса
// Т.к. этот компонент является компонентом с жизенным циклом
class BookList extends Component {
    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        )
    }
};

export default BookList;