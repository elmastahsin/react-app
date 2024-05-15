function ListGroup() {
    let items = ["New York","San Fransisco","Los Angeles","Chicago"];
    items= [];

    return (<>
        <h1>List Group</h1>
        {items.length === 0 ? <p>No items to display</p>:null}
        <ul className="list-group">

            {items.map(item => <li key={item}>{item}</li>)}

        </ul>
    </>);
}

export default ListGroup;
