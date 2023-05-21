import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    //let a = 1

    let [a, setA] = useState(1)


    const onclickHandler = () => {
        setA(++a);
        console.log(a)
    }

   // let [a, setA] =useState(0)
    const onclickHandler0=()=>{
        setA(0);
        console.log(a)
    }


    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onclickHandler}>+</button>
            <button onClick={onclickHandler0}>0</button>
        </div>
    );
}

export default App;
