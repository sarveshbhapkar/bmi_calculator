import "./App.css";


function App() {
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
            />
          </div>

          <div>
            <label>height{inches}</label>
            <input
              type="text"
              placeholder="Enter Height Value"
              value={height}
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
