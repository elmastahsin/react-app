import Button from "./components/Button";
import Alert from "./components/Alert";
import {useState} from "react";
import ListGroup from "./components/ListGroup";
import './App.css';
import { DiApple } from "react-icons/di";
function App() {
    const items = ["New York", "London", "Paris", "Berlin", "Tokyo"];
    return (
        <div>
           <DiApple color="red" size="40" />
        </div>
    );
}

export default App;