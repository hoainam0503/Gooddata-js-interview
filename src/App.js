// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from "react";
import { Dashboard } from "./containers";
import {Provider} from 'react-redux'
import store from './data/store'

const App = () => {
    return (
      <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
      </Provider>
    );
  
}

export default App;
