import React, { useState, useEffect } from 'react';
import './App.css';

const Context = React.createContext();

const Parent = props => {
  const obj = { text: 'random text' };
  return <Context.Provider value={obj}>{props.children}</Context.Provider>;
};
const Child = () => {
  const data = React.useContext(Context);
  return <div style={{ margin: '50vh auto' }}>{data.text}</div>;
};

const App = () => {
  const [count, updateCount] = useState(0);
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   // document.title = `You clicked ${count} times`;
  //   console.log('useEff');
  //   updateCount(count + 1);
  //   return () => updateCount(count - 1);
  // });
  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('unmount');
      // updateCount(0);
    };
  }, [count]);
  console.log('render');
  return (
    <div className="App">
      {/* <p>{count}</p>
      <button
        onClick={() => {
          console.log('update count');
          updateCount(count + 1);
        }}
      >
        Add
      </button> */}
      <Parent>
        <Child />
      </Parent>
    </div>
  );
};

export default App;
