import React from 'react';
import Header from './components/Header';
import RequestInfo from './components/RequestInfo';

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header/>
      <main className="bluish-bg flex-grow">
        <RequestInfo/>
      </main>
    </div>
  );
}

export default App;
