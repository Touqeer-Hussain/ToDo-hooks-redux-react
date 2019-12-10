import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'


import { Button } from '@material-ui/core';

import Header from './components/header'
import Form from './components/form'
import ListComp from './components/list'
import store from './redux/store'


function App(props) {
  return (
    <Provider store={store} >
    <div className="App">
      
      <Header>
        <Form/>
        <ListComp />
      </Header>
      
    </div>
    </Provider>
  );
}

export default App;
