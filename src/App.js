import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import Nuevoproducto from './components/Nuevoproducto';
import Editarproducto from './components/Editarproducto';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
          <Header />

          <div className="container mt-5">
              <Switch>
                  <Route exact path="/" component={Productos} />
                  <Route exact path="/productos/nuevo" component={Nuevoproducto} />
                  <Route exact path="/productos/editar/:id" component={Editarproducto} />
              </Switch>
          </div>
      </Provider>
    </Router>
  );
}

export default App;