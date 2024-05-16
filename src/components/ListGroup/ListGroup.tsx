import {useState} from "react";

import styles from "./ListGroup.module.css";

import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding: 0;
`
interface ListItemProps {
    active: boolean;
}
const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background : ${props => props.active ? 'blue' : 'none'};
`

interface Props {
    items: string[];
    heading: string;
    //item:string => void
    onSelectItem: (item: string) => void
}


function ListGroup({items, heading, onSelectItem}: Props) {

    const [selectedIndex, setSelectedIndex] = useState(0);


    return (<>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No items to display</p>}
        <List>

            {items.map((item, index) =>
                <ListItem
                    active={ index === selectedIndex}
                    key={item}
                    onClick={() => {
                        setSelectedIndex(index);
                        onSelectItem(item);}}>
                    {item}
                </ListItem>)}

        </List>
    </>);
}

export default ListGroup;
