import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import UserSignupSlice from './reducers/UserSignupSlice'
import UserLoginSlice from './reducers/UserLoginSlice'
import SubRedditSlice from './reducers/SubRedditSlice'
import AllPostsSlice from './reducers/AllPostsSlice'

const persistConfig = {
    key: 'root',
    storage
}
//combining all reducers into one
const rootReducer = combineReducers({
    UserSignup : UserSignupSlice,
    UserLogin : UserLoginSlice,
    SubReddit : SubRedditSlice,
    AllPosts : AllPostsSlice
 
})

//persisting all reducers into states even when a page is refreshed
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store)
