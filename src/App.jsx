import { useState } from "react";

function App() {
  const [ result, setResult ] = useState("");
  const [ show, setShow ] = useState(false);
  const [inputDate, setInputDate] = useState({
    dateOne: "",
    dateTwo: ""
  });

  const inputHandler = (e) => {
    setInputDate(prevValue => ({
      ...prevValue,
      [e.target.name]: e.target.value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setShow(true);
    const { dateOne, dateTwo } = inputDate;

    if (dateOne.length == 0 || dateTwo.length == 0) {
      setResult("Please enter valid dates");
    }
    else {
      if (dateOne > dateTwo) {
        setResult("DateOne is GREATER than DateTwo.");
      } else if (dateOne < dateTwo) {
        setResult("DateOne is SMALLER than DateTwo.");
      } else if (dateOne == dateTwo) {
        setResult("DateOne is EQUAL to DateTwo.");
      }
    }
  }

  return (
    <>
      <div className="container">
        <h2 className="title">Compare Dates</h2>
        <p className="sub-title">Fill the two Date input fields and compare! 😊 </p>

        <form onSubmit={submitHandler}>
          <div className="dates">
            <input type="date" name="dateOne" value={inputDate.dateOne} onChange={inputHandler} />
            <input type="date" name="dateTwo" value={inputDate.dateTwo} onChange={inputHandler} />
          </div>
          <button id="check">Check</button>
          {
            show && <p className="result">{ result }</p>
          }
        </form>
      </div>
    </>
  )
}

export default App;
