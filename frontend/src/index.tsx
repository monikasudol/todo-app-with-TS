import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import './App.css';
import BoardWithAllLists from './modules/board-with-all-lists';
import CreateNewListsForm from './modules/create-new-lists-form';
import WelcomePage from './modules/welcome-page';
import './index.css';
import { reducer } from './state/reducers'
import registerServiceWorker from './registerServiceWorker';
import rootSaga from './state/saga';


const sagaMiddleware = createSagaMiddleware();

const reduxMiddlewares = [
  sagaMiddleware
];

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...reduxMiddlewares)
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={WelcomePage} />
        <Route path='/lists' component={BoardWithAllLists} />
        <Route path='/create-new-lists' exact={true} component={CreateNewListsForm} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
