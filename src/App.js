import React, { useState, useEffect } from 'react';
import { createStore } from 'redux'
import rootReducer from './redux/reducers'
import { Provider } from 'react-redux'

import { Button } from '@material-ui/core';

import Header from './components/header'
import Form from './components/form'

const store = createStore(
  rootReducer,
)


function App(props) {
    const [count, setCount] = useState(0)
  return (
    <Provider store={store} >
    <div className="App">
      
      <Header>
        <Form/>
       
      </Header>
      
    </div>
    </Provider>
  );
}

export default App;
