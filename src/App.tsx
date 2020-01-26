import React from 'react';
import './App.css';
import { Main } from './components/Main/Main';
import { Detail } from './components/Detail/Detail';

const App: React.FC = () => {
  return (
    <div className="App">
      <Main />
      <Detail />
    </div>
  );
}

export default App;
