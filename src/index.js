import React from 'react'
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App'
import * as serviceWorker  from './serviceWorker'
//thunk is used for asynchronous actions


ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister();