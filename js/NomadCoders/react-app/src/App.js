import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye *("); // 언제 컴포넌트를 삭제했는지 알 수 있다! (자주 사용하진 않음)
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowting] = useState(false);
  const onClick = () => setShowting((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
