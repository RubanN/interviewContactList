import './App.css';
import { useDispatch,useSelector} from 'react-redux';
// import {vadivelUActions,goundamaniActions } from "./index"
import { actions } from './store/index';
function ReduxToolkit() {
  // const comdies = useSelector(state=>state)
  const dispatch=useDispatch();
  const counter = useSelector((state)=>state.counter)
  
 const increment=()=>{
  dispatch(actions.increment())
 }
 const decrement=()=>{
  dispatch(actions.decrement())
 }
 const addBy=()=>{
   dispatch(actions.addBy(10))
 }
  return (
    <div className="App">
       {/* {comdies} */}
     {/* <button onClick={()=>dispatch(vadivelUActions())}>Vadivelu comedy</button> */}
    {/* <button onClick={()=>dispatch(goundamaniActions())}>Goundmani</button> */}
    <h1>Counter app</h1>
   <h2>{counter}</h2>
   <button onClick={increment}>Increment</button>
   <button onClick={decrement}>decrement</button>
   <button onClick={addBy}>Add</button> 
    






    </div>
  );
}

export default ReduxToolkit;
