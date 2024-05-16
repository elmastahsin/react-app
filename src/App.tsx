import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import {Simulate} from "react-dom/test-utils";
import toggle = Simulate.toggle;

function App() {
    const items = ["New York", "London", "Paris", "Berlin", "Tokyo"];
    return (
        <div>
            <Like onClick={()=> console.log('Clicked') }/>
        </div>
    );
}

export default App;