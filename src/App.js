import { useState } from "react";
import data from "./data";
function App() {
  const [count, setcount] = useState(0);
  const [text, settext] = useState([]);
  const yessubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    settext(data);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    settext(data.slice(0, amount));
  };
  return (
    <div className="App">
      <section>
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <div className="mainbody">
          <div className="forms">
            <form onSubmit={yessubmit}>
              <label>
                <span>Paragraphs:</span>
                <input
                  type="number"
                  value={count}
                  onChange={(e) => {
                    setcount(e.target.value);
                  }}
                ></input>
              </label>
              <button className="btn">GANERATE</button>
            </form>
          </div>
          <div className="article">
            {text.map((element, idx) => {
              return <p key={idx}>{element}</p>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
