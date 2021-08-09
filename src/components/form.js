import React ,{useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

const Form = () => {
    const [inputs, setInputs] = useState({
       name: '',
       email: ''
    });
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs);
        setInputs({
            name: '',
            email: ''
        });

    }
    const state = useSelector(state => state.CounterReducer);
    return (
        <div>
            <h1>State is {state} </h1>
            <form action="" onSubmit={handleSubmit}>
                <label>name</label>
                <input type="text" name="name" value={inputs.name} onChange={(e) => setInputs( {...inputs,name: e.target.value})} />
                <label>email</label>
                <input type="text" name="email" value={inputs.email} onChange={(e) => setInputs( {...inputs,email: e.target.value})}  />
                <input type="submit" name="submit" value="Save" />
            </form>
            
        </div>
    )
}

export default Form
