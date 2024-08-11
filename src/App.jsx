import { useState } from "react";
import axios from "axios";
import ResultComponent from "./components/ResultComponent";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [selectedMethod, setSelectedMethod] = useState("GET");
  const [inputValue, setInputValue] = useState("");
  const [loading, setloading] = useState(false);
  const [responsedata, setresponsedata] = useState(null);
  const handleSelectChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleurlsend = () => {
    debugger;
    if (inputValue === "") {
      document.getElementsByClassName("inputcontainer")[0].style.borderColor =
        "red";
      return;
    }
    setloading(true);
    axios
      .get(inputValue)
      .then((response) => {
        setresponsedata(response.data);
      })
      .catch((error) => {
        setresponsedata("No Data Found");
      })
      .finally(() => {
        setloading(false); // Stop loading
      });
  };

  return (
    <>
      <div className="divcontainer">
        <select
          value={selectedMethod}
          onChange={handleSelectChange}
          className="selectcontainer"
        >
          <option
            value="GET"
            className={selectedMethod === "GET" ? "selected" : ""}
            style={{ color: "green" }}
          >
            GET
          </option>
          <option
            value="POST"
            className={selectedMethod === "POST" ? "selected" : ""}
            style={{ color: "red" }}
          >
            POST
          </option>
        </select>
        <input
          type="text"
          className="urltext inputcontainer"
          placeholder="Test your APIs"
          value={inputValue}
          onChange={handleInputChange}
          style={{
            color: "black",
            backgroundColor: "white",
          }}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleurlsend()}
        >
          Send
        </button>
        {loading && <div className="loading-animation">Loading...</div>}
        {/* {responsedata && (
          <div className="response-data">
            {JSON.stringify(responsedata, null, 2)}
          </div>
        )} */}
      </div>
      <ResultComponent
        responsedata={responsedata}
        setresponsedata={setresponsedata}
      />
    </>
  );
}

export default App;
