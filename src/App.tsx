import {useState} from "react";
import produce from 'immer';
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {

    const [cartItems, setCartItems] = useState(['Product1', 'Product2']);


    return (
        <div>
           <Form/>
        </div>);
}

export default App;