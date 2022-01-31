import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('I run all the time');
  useEffect(() => {
    console.log('Call The API');
  }, []);
  console.log("[SEARCH FOR]", keyword);
  return (
    <div>
      <input type="text" onChange={onChange} value={keyword} placeholder="Search here!" />
      <h1 className={styles.title}>Total Count: {counter}</h1>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
