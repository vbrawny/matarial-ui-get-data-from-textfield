import { useState } from "react";
import "./styles.css";
import { TextField } from "@material-ui/core";
export default function App() {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <TextField value={value} variant="outlined" onChange={changeHandler} />
      </div>
      <p>text-field-value {value}</p>
    </>
  );
}
