import React from 'react';
import { Provider } from 'react-redux'



import Header from './components/header'
import Form from './components/form'
import ListComp from './components/list'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <Provider store={store} >
      <PersistGate  loading={null} persistor={persistor}>
    <div className="App">
      
      <Header>
        <Form/>
        <ListComp />
      </Header>
      
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
