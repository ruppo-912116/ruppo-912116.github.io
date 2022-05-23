import './App.css';
import Circle from "./animation/circle/Circle";

function App() {
  return (
    <>
        <Circle/>
        <div style={{position: "absolute",  left:"50%",top:"50%", zIndex:-1}}>Hello there!</div>
    </>
  );
}

export default App;
