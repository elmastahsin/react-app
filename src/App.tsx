import Button from "./components/Button/Button";
import Like from "./components/Like/Like";

import {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import contextMenu = Simulate.contextMenu;
import Message from "./Message";

function App() {

    return (
        <div>
            <Message/>

        </div>
    );
}

export default App;