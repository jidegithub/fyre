import React from 'react';
import GenerateInvoice from './components/Invoice/GenerateInvoice';
import Header from './components/Header/Header';
import InvoicePreview from './components/Invoice/InvoicePreview';
import RequestInfo from './components/Request/RequestInfo';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header/>
      <main className="bluish-bg flex-grow">
        <Switch>
          <Route path="/" component={RequestInfo} exact />
          <Route path="/generateinvoice" component={GenerateInvoice} />
          <Route path="/invoicepreview" component={InvoicePreview} />
        </Switch>
          {/* <RequestInfo/> */}
          {/* <GenerateInvoice/> */}
          {/* <InvoicePreview/> */}
      </main>     
    </div>
  );
}

export default App;
