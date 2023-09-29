import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';


const reducer =(state=0,action)=>{
    if(action.type ==="INCREMENT"){
        return state+1
    }else if(action.type ==="DECREMENT"){
         return state -1
    }
     console.log("reduced called");
     return state
}
const store = createStore(reducer)
store.subscribe(() => {
    console.log('current state', store.getState());
  });
  
  store.dispatch({
    type: 'INCREMENT'
  });
  
  store.dispatch({
    type: 'INCREMENT'
  });
  
  store.dispatch({
    type: 'DECREMENT'
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider >
    <App />
   </Provider>
);
