import {useState} from "react";

function App() {
    const [customer, setCustomer] = useState({
        name: "John",
        address: {
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zip: "10001"
        }
    });

    const handleClick = () => {
        setCustomer({
            ...customer,
            address: {
                ...customer.address, zip: "10002"
            }
        });

    };


    return (
        <div>
            {customer.address.zip}
            <button onClick={handleClick}>Click Drink</button>

        </div>);
}

export default App;