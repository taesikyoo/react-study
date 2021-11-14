import './App.css';
import {useState} from "react";
import Children from "./Children";

function App() {
    const [count, setCount] = useState(0);

    const onClickButton = (number) => {
        setCount(count + number);
    }
    // 상태변화 함수를 꼭 호출해줘야 한다.

    return (
        <div className="App">
            <button onClick={() => onClickButton(+1)}>+1</button>
            <button onClick={() => onClickButton(-1)}>-1</button>
            <Children count={count} setCount={setCount}>
                <span>나는 자식 요소다</span>
            </Children>
        </div>
    );
}

export default App;
