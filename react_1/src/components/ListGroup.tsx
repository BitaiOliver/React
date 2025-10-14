import { useState } from "react";

interface ListProps{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}:ListProps) {

    //hook
    const [selectedItem, setSelectedItem] = useState(-1);

    return (
        <>
            <h1> {heading} </h1>
            {items.length === 0 && <p>No items</p>}
            <ul className="list-group">
                {items.map((city, index) => (
                    <li 
                    className={selectedItem === index? "list-group-item active" : "list-group-item" }
                    key={city} 
                    onClick={() => {
                        setSelectedItem(index);
                        onSelectItem(city);
                        }}
                    >
                        {city}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;