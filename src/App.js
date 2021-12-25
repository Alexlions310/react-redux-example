import React from 'react'
import { Provider } from 'react-redux';
import store from './redux/store';
import  Number  from './components/Number'
import './App.css'

function App() {
  return (
   <Provider store= {store}>
    <div className="App">
      <Number />
    </div>
   </Provider>
  );
}

export default App
