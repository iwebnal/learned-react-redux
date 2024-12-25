import { configureStore } from 'redux';
import reducer from './reducers';

const store = configureStore(reducer);

export default store;


// @deprecated
// Мы рекомендуем использовать метод configureStore пакета @reduxjs/toolkit, который заменяет createStore.
// Redux Toolkit — это наш рекомендуемый подход для написания логики Redux сегодня, включая настройку хранилища, редукторы, выборку данных и многое другое.
// Для получения более подробной информации, пожалуйста, прочтите эту страницу документации Redux: https://redux.js.org/introduction/why-rtk-is-redux-today
// configureStore из Redux Toolkit — это улучшенная версия createStore, которая упрощает настройку и помогает избежать распространенных ошибок.
// Вам не следует использовать основной пакет redux сегодня, за исключением учебных целей. Метод createStore из основного пакета redux не будет удален, 
// но мы призываем всех пользователей перейти на использование Redux Toolkit для всего кода Redux.
// Если вы хотите использовать createStore без этого визуального предупреждения об устаревании, используйте вместо этого импорт legacy_createStore:

// import { legacy_createStore as createStore} from 'redux'