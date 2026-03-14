
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storage from 'redux-persist/lib/storage'

import filterReducer from "./filterSlice"
import contactsReducer from "./contactsSlice"

const contactsPersistConfig = {
    key: 'root',
    storage
}

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer)

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        contacts: persistedContactsReducer
    }
})

export const persistor = persistStore(store)