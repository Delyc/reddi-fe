import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import UserSignupSlice from './reducers/UserSignupSlice'
import UserLoginSlice from './reducers/UserLoginSlice'
import SubRedditSlice from './reducers/SubRedditSlice'
import AllPostsSlice from './reducers/AllPostsSlice'
// import { AuthApi } from '@/utils/AuthAPI'

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    UserSignup : UserSignupSlice,
    UserLogin : UserLoginSlice,
    SubReddit : SubRedditSlice,
    AllPosts : AllPostsSlice
 
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  // [AuthApi.reducerPath]: AuthApi.reducer,
  middleware: [thunk],
});

export const persistor = persistStore(store)
