import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/redux-state';
import 'font-awesome/css/font-awesome.min.css';

export let rerender = () => {
   ReactDOM.render(
      <App store={store} />,
      document.getElementById('root')
   );
} 

rerender(store.getState());
store.subscribe( () => {
   let state = store.getState();
   rerender(state);
});
