import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
//Selectors in redux;
const VADIVEL_COMEDY = "VADIVEL_COMEDY";
const GOUNDAMANI_COMEDY = "GOUNDAMANI_COMEDY"


//ACTIONS
export const vadivelUActions = ()=>({type:VADIVEL_COMEDY});
export const goundamaniActions=()=>({type:GOUNDAMANI_COMEDY})

//Reducers
const comedyReducer=(state,actions)=>{
   switch(actions.type){
      case VADIVEL_COMEDY:
        return state ="Kadupethurraru my Lord"
        case GOUNDAMANI_COMEDY:
          return state ="ungulu ellam oraa kulappama irukumaa"
          default:
            return state="No comedy has been selected"
   }
}
let store = createStore(comedyReducer)





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
   </Provider>
);
