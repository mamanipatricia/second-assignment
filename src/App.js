import React, { useState } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

function App() {
  const [output, setOutput] = useState("");
  const outputChangedHandler = (event) => {
    setOutput(event.target.value);
    console.log("event", event);
  };
  const deleteOutputHandler = (outputIndex) => {
    const outputs = Array.from(output);
    outputs.splice(outputIndex, 1);
    setOutput(outputs.join(""));
  };
  return (
    <div className="App">
      <input
        value={output}
        onChange={(event) => {
          outputChangedHandler(event);
        }}
      />
      <p> {output.length}</p>
      <ValidationComponent outputLength={output.length} />
      {Array.from(output).map((char, index) => (
        <CharComponent
          key={`char-${index}`}
          char={char}
          click={() => {
            deleteOutputHandler(index);
          }}
        />
      ))}
    </div>
  );
}

export default App;
