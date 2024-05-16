import ListGroup from "./components/ListGroup";

function  App() {
    // const  name = "Tahsin";
    let items = ["New York", "San Fransisco", "Los Angeles", "Chicago", "Houston", "Paris", "London", "Berlin", "Tokyo", "Beijing"];

    return <div>
        <ListGroup items={items} heading = "Cities"/>
    </div>
}
export default App;