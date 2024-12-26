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

const initialState = {
    // books: [],
    books: books // тут находятся даные из Redux Store для компонента BookList который обернут в connect. В файле book-list.js
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };

        default:
            return state;
    }

    return state;
};

export default reducer;