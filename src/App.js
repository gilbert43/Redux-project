import './App.css';
import Counter from './components/counter';
import Form from './components/form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Increment } from './actions';
import { Decrement } from './actions';


function App() { 
  const counter = useSelector(state=> state.CounterReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Counter/>
      <br></br>
      <Form/>
      <h1>Counter {counter}</h1>
      <button onClick={() =>dispatch(Increment(4))}>+</button>
      <button onClick={() =>dispatch(Decrement(2))}>-</button>
      
    </div>
  );
}

export default App;
