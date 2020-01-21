// import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';

// create a functional component
const App = () => {
  const labelText = 'Enter Text : ';
  const btnStyle = {  margin: 10 + 'px', backgroundColor: 'blue', color: 'white' };
  const btnText = 'Submit me !';
  return (
    <div>
      <p>Page Reload Timestamp : {new Date().toLocaleString()}</p>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input type="text" id="name"></input>
      <button type="submit" style={btnStyle}>
        {btnText}
      </button>
    </div>
  );
};

// render the functional component
ReactDOM.render(<App />, document.querySelector('#root'));
