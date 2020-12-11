import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import BookDetails from './pages/BookDetails';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/book/:book_id" component={BookDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;