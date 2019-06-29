import React from 'react';
import Feed from './components/Feed';

const BASE_URL = 'http://localhost:5257/feed/';

const App: React.SFC = () => {
  return (
    <div className="App">
      <Feed fetchURI={BASE_URL}/>
    </div>
  );
}

export default App;
