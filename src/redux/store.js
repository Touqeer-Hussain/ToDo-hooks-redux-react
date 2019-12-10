import { createStore } from 'redux'
import rootReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import hardSet from 'redux-persist/lib/stateReconciler/hardSet'



const persistedConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet
}

const persistedReducer = persistReducer(persistedConfig, rootReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

export { store, persistor }