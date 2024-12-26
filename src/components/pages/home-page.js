import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: 'Test book 1',
            author: 'Test author 1'
        },
        {
            id: 2,
            title: 'Test book 2',
            author: 'Test author 2'
        },
        {
            id: 3,
            title: 'Test book 3',
            author: 'Test author 3'
        },
        {
            id: 4,
            title: 'Test book 4',
            author: 'Test author 4'
        },
        {
            id: 5,
            title: 'Test book 5',
            author: 'Test author 5'
        },
    ]

    // return <div>Home Page</div>
    return (
        <BookList books={books} />
    )
}

export default HomePage;