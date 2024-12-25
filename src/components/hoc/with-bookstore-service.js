import React from "react";
import { BookstoreServiceConsumer } from './bookstore-service-context';

// const withBookstoreService = () => (Wrapper) => {} - тут говорится о том что withBookstoreService эта функция которая возвращает 
// функцию которую будут оборачивать в Wrapper
const withBookstoreService = () => (Wrapper) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return(<Wrapper {... props} bookstoreService={bookstoreService}/>)
                    }
                }
            </BookstoreServiceConsumer>
        );
    }
}

// для того чтобы получить данные из BookstoreServiceConsumer-а нам нужно передать в него render-функцию
// render-функцию пример в качестве своего значения тот сервис который мы передадим через контекст

export default withBookstoreService;