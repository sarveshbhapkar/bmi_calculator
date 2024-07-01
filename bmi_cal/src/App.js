import "./App.css";
import { useState } from "react";


function App() {

  const[weight,setweight] = useState(0);
  const[height,setheight] = useState(0);
  const[bmi,setbmi] = useState('');
  const[message,setmessage] = useState('');



  return (
    <div className="App">
      <div className="container">
        <h2> BMI CALCULATOR</h2>
        <form>
          <div>
            <label>weight{lbs}</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e)=> setweight(e.target.value)}
            />
          </div>

          <div>
            <label>Height {in}</label>
            <input
              type="text"
              placeholder="Enter Height Value"
              value={height}
              onChange={(e)=> setheight(e.target.value)}

            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is :{bmi} </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
