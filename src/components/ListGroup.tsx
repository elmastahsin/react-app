import {Fragment} from "react";
import {MouseEvent} from "react";

function ListGroup() {
    let items = ["New York", "San Fransisco", "Los Angeles", "Chicago"];
    // items = [];
    //Event handler
    const handleClick = (event: MouseEvent) => console.log(event);

    // const getMessages = () => {
    //     return items.length === 0 ? <p>No items to display</p> : null;
    // }

    return (<>
        <h1>List Group</h1>
        {/*{getMessages()}*/}
        {items.length === 0 && <p>No items to display</p>}
        <ul className="list-group">

            {items.map((item, index) => <li className="list-group-item"
                                            key={item}
                                            onClick={handleClick}
            >
                {item}</li>)}

        </ul>
    </>);
}

export default ListGroup;
