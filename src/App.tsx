import React, {useState} from 'react';
import './App.css';

function App() {
    let [a, setA] = useState(1)
    const onclickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onclickHandlerNoll = () => {
      setA(0)
        console.log(a)
    }
    const onclickHandlerMinus = () => {
      setA(--a)
        console.log(a)
    }

    return (
        <div className={'App-header'}>
            <h1>{a}</h1>
            <button onClick={onclickHandler}>+</button>
            <button onClick={onclickHandlerNoll}>0</button>
            <button onClick={onclickHandlerMinus}>-</button>
        </div>
    )

}

export default App;
