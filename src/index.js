import React from "react";
import { render } from "react-dom";
import './style.css'


class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <input type="number"  />
        <div className="calculator-buttons">
          <button className='calc-button is-clear'>C</button>
          <button className='calc-button'>&divide;</button>
          <button className='calc-button'>7</button>
          <button className='calc-button'>8</button>
          <button className='calc-button'>9</button>
          <button className='calc-button'>&times;</button>
          
          <button className='calc-button'>4</button>
          <button className='calc-button'>5</button>
          <button className='calc-button'>6</button>
          <button className='calc-button'>&minus;</button>
          
          <button className='calc-button'>1</button>
          <button className='calc-button'>2</button>
          <button className='calc-button'>3</button>
          <button className='calc-button'>&#43;</button>


          <button className='calc-button is-zero'>0</button>
          <button className='calc-button is-equals'>&#61;</button>
        </div>
    </div>
    );
  }
}
const App = () => (
  <div>
    <h2 style={{textAlign: 'center'}}>React JS Calculator</h2>
    <Calculator />
  </div>
);

render(<App />, document.getElementById("root"));
