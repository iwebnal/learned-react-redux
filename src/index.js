import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'; 
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';

// для того чтобы получить доступ к данным
import BookStoreService from './services/bookstore-service';
// для того чтобы наши компоненты получили досту к сервису
import { BookstoreServiceProvider } from './components/bookstore-service-context';

// чтобы управлять данными в нашем приложении
import store from './store';

// создаем новый инстанс сервиса чтобы с ним можно было работать и передавать другимкомпонентам
const bookStoreService = new BookStoreService();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// (!!!) ----> Раздел 12 (Разработка redux-приложения). Урок 134 (Каркас React-Redux приложения)

// ReactDOM.render(
//     <Provider store={store}>
//         <ErrorBoundry>
//             <BookstoreServiceProvider value={bookStoreService}>
//                 <Router>
//                     <App />
//                 </Router>
//             </BookstoreServiceProvider>
//         </ErrorBoundry>
//     </Provider>,
//     document.getElementById('root')
// );

root.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookStoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
);

// Т.е. все компоненты находящиеся в (App) будут иметь доступ ко всему что находится выше (App). 
// Например к (Router) далее к (BookstoreServiceProvider) далее к (ErrorBoundry) далее к (Provider)