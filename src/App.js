import './App.css';
import React from 'react';

import { create, all } from 'mathjs';

function App() {
  const math = create(all);
  // console.log(math.evaluate('1+1'));

  const [numbers, setNumbers] = React.useState('0');

  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const trueString = function (string) {
    const endString = string.slice(-1);
    if (endString === '+' || endString === '*' || endString === '-' || endString === '/') {
      return string.slice(0, -1);
    } else return string;
  };

  function addNum(num) {
    numbers === 0 || numbers === '0' ? setNumbers('' + num) : setNumbers(numbers + '' + num);
  }

  function delNum() {
    numbers <= 0 || numbers.length === 1 ? setNumbers('0') : setNumbers(numbers.slice(0, -1));
  }

  function addZnac(znac) {
    numbers.slice(-1) === znac ? setNumbers(numbers) : setNumbers(trueString(numbers) + znac);
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Calc</h1>
      </header>
      <div className="result">
        <span className="res">{''}</span>
        <span>{numbers}</span>
      </div>
      <div className="number">
        {numArr.map((el, i) => (
          <button key={i} onClick={() => addNum(el)}>
            {el}
          </button>
        ))}

        <button
          className="del"
          onClick={() => {
            delNum();
          }}
        >
          Del
        </button>
        <button
          className="plus"
          onClick={(el) => {
            addZnac(el.target.innerHTML);
          }}
        >
          +
        </button>
        <button
          className="minus"
          onClick={(el) => {
            addZnac(el.target.innerHTML);
          }}
        >
          -
        </button>
        <button
          className="mult"
          onClick={(el) => {
            addZnac(el.target.innerHTML);
          }}
        >
          *
        </button>
        <button
          className="division"
          onClick={(el) => {
            addZnac(el.target.innerHTML);
          }}
        >
          /
        </button>
        <button
          className="dot"
          onClick={(el) => {
            addZnac(el.target.innerHTML);
          }}
        >
          .
        </button>
        <button
          className="response"
          onClick={() => {
            setNumbers(math.evaluate(trueString(numbers)) + '');
            // toFixed(2)
          }}
        >
          =
        </button>
        <button
          className="reset"
          onClick={() => {
            setNumbers('0');
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
