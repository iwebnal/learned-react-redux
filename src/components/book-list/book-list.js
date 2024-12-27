import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc'

import './book-list.css';

// При отображении этого компонента он должен загружать данные
// Значить этот компонент должен реализовываться в виде клсса
// Т.к. этот компонент является компонентом с жизенным циклом

/**
 * 
 * Подключаем BookList к Redux Store
 * Реализуем получение данных в BookList из Redux
 * BookList имеет возможность обновлять данные с помощью передачи действия
 * (action) на которое наш редюсер делает так что данные обновляются 
 * 
 * connect - это функция которая создает новый компонент
 * для того чтобы ее использовать нужно наш компонент обернуть в эту функцию, которая сама возвращает функцию
 * ---> connect()()
 * в первую функцию мы передаем конфигурацию о там как именно нам нужно подключать компонент BookList
 *      - первая часть конфигурации определчяет какие данные мы будем получать из Redux Store (это то что лежит в папке reducer -> index.js -> initialState)
 * во вторую функцию мы передаем сам компонент
 * ---> 
 * и вся эта конструкция будет возвращать новый компонент который уже будет знать о Redux Store
 * 
 * (!) Чтобы писать в Redux Store, компонент отправляет в него (action)
 * Наша функция редюсер получает действие (action) и обновляет Redux Store
 * 
 */
class BookList extends Component {
    componentDidMount() { // вызывается после рендеринга компонента. Здесь можно выполнять запросы к удаленным ресурсам
        // тут мы должны получит данные
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks(); // теперь данные будут браться из bookstoreService с помощью метода getBooks()
        console.log(data);

        // тут мы должны передать действие в Redux Store
        this.props.booksLoaded(data)

    }

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

// для созданя конфигурации
// возврашает объект, где ключи - это название свойств которые мы присвоим нашему компоненту
// а значение - это те значения из state которые мы присвоим
const mapStateToProps = (state) => { // state - это state из Redux Store
    return {
        books: state.books // значит в наш компонент нужно передать свойство books (то что "ключ"). state.books - это значение ключа
    }
};

// Вторая часть конфигурации метода (connect). Нужно чтобы передать действие action в store и вызвать функцию dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        booksLoaded: (newBooks) => {  // значением свойства booksLoaded будет функция которая будет dispatch-ть действие
            dispatch({
                type: 'BOOKS_LOADED',
                payload: newBooks
            })
        }
    };
};


export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookList)
); // передали конфигурацию в виде mapStateToProps и теперь компонент будет получать данные из Redux Store