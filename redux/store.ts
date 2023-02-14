import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import UserSignupSlice from './reducers/UserSignupSlice'

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    userSignup : UserSignupSlice
 
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)