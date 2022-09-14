import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setinput] = useState("");
  const [data, setdata] = useState([]);

  const addData = ()=>{
    setdata([... data, input ]);
    setinput('');
  }
  return (
    <>
      <div className="main">
        <div className="logo">
          <img src={logo} alt="123" />
        </div>
        <div className="input">
          <input name="input" value={input} onChange={e => setinput(e.target.value)}  />
          <i onClick={addData} class="fa-sharp fa-solid fa-plus"></i>
        </div>
        {
          data.map((element, index)=>{
            return(
              <div className="input margin" key={index}>
              <h3>{element}</h3>
              <i class="fa-sharp fa-solid fa-trash"></i>
            </div>
            )
          })
        }
        

        <div className="button">
            <button className="btn">Clear All</button>
        </div>
      </div>
    </>
  );
}

export default App;
