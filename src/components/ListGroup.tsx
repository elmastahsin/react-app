// import {Fragment} from "react";
// import {MouseEvent} from "react";
// {item: [] , heading :string }
interface ListGroupProps {
    items: string[];
    heading: string;
}
import {useState} from "react";
function ListGroup({items, heading}: ListGroupProps) {
    // items = [];

    //Event handler
    // const handleClick = (event: MouseEvent) => console.log(event);

    // const getMessages = () => {
    //     return items.length === 0 ? <p>No items to display</p> : null;
    // }
    // let selectedIndex = 0;

    //Hook
    const [selectedIndex,setSelectedIndex]  = useState(-1);


    return (<>
        <h1>{heading}</h1>
        {/*{getMessages()}*/}
        {items.length === 0 && <p>No items to display</p>}
        <ul className="list-group">

            {items .map((item, index) =>
                <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                    key={item}
                    onClick={() => {
                        setSelectedIndex(index),console.log(item,index)
                    }}
                >
                    {item}</li>)}

        </ul>
    </>);
}

export default ListGroup;
