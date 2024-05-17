import {useState} from "react";
import produce from 'immer';
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {

    const [cartItems, setCartItems] = useState(['Product1', 'Product2']);


    return (
        <div>
            <ExpandableText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at autem culpa dignissimos,
                doloribus, et excepturi facilis hic, inventore itaque laudantium nobis omnis pariatur quidem quod sunt
                voluptate? Aspernatur assumenda doloremque ducimus eius ex labore modi quaerat? Commodi, deleniti
                ducimus eos, error eum ex labore libero nemo non nostrum perspiciatis quae reiciendis saepe totam velit.
                Alias architecto commodi culpa harum id, impedit natus omnis, optio recusandae repellat repudiandae
                suscipit veritatis voluptas! Amet aperiam asperiores assumenda delectus, dignissimos dolorum earum eum,
                fuga illum iusto labore magni nesciunt obcaecati officia omnis quaerat quas quia repellendus repudiandae
                sint! Aperiam corporis ducimus mollitia soluta?</ExpandableText>
        </div>);
}

export default App;