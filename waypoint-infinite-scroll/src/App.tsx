import React from 'react';
import Feed from './components/Feed';
import {BASE_URL} from './constants/env';

const App = () => (
  <div className="app">
    <Feed fetchURI={BASE_URL}/>
  </div>
);

export default App;
