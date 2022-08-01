import './App.css';
import Circle from "./animation/circle/Circle";

function App() {
    return (
        <>
            <Circle/>
            <div
                className={"absolute left-0.5 top-0.5 cursor-pointer"}
            >Hello there, i am rupan!
            </div>
        </>
    );
}

export default App;
