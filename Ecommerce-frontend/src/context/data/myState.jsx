import { useState } from "react";
import myContext from "./myContext";


function MyState(props) {
 const [mode,setMode]= useState("light")


 const toggleMode = (mode) => {
  if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
  }
  else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

  }
}

  return (
    <div>
      <myContext.Provider value={{mode,toggleMode}}>
        {props.children}
      </myContext.Provider>
    </div>
  )
}

export default MyState