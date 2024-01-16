/*
import Counter from "./Counter";

const App = () => {
  return <Counter />;
};

export default App;
*/


import Info from "./Info";

const App = () => {
  return <Info />;
};

export default App;

// 8.2.3 뒷정리하기 
/*
import { useState } from "react";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
      onClick={()=> {
        setVisible(!visible);
      }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;
*/
/*
import Average from "./Average";

const App = () => {
  return <Average />;
};

export default App;
*/