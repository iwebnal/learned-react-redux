import React from 'react';

// внизу мы переименовали Provider в BookstoreServiceProvider. Также Consumer в BookstoreServiceConsumer
const {
    Provider: BookstoreServiceProvider,
    Consumer: BookstoreServiceConsumer
} = React.createContext();

export {
    BookstoreServiceProvider,
    BookstoreServiceConsumer
}