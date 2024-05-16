import Button from "./components/Button/Button";
import Like from "./components/Like/Like";

import {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import contextMenu = Simulate.contextMenu;

function App() {
    const [person, setPerson] = useState({
        fistName: 'John',
        lastName: 'Doe',
        age: 25,
        contact: {
            email: 'john.doe@gmail.com',
            phone: '9876543210',
            address: {
                city: 'Pune',
                state: 'MH'

            }
        }
    });
    return (
        <div>

        </div>
    );
}

export default App;