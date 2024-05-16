import Button from "./components/Button/Button";
import Like from "./components/Like/Like";

import {useState} from "react";

function App() {
    let count = 0;
    const [isVisible, setIsVisible] = useState(false);
    const [isApproved, setApproved] = useState(false);
    const handleClick = () => {
        setIsVisible(true);
        count++;
        console.log(isVisible)
    }
    return (
        <div>
            <button onClick={handleClick}>Show</button>
        </div>
    );
}

export default App;