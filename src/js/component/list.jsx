import React, { useState } from "react";

//create your first component
const List = () => {
    const [inputValue, setInputValue] = useState("");
    const [itemsArray, setItemsArray] = useState([]);

    const addArray = (e) => {
        if (e.key === "Enter") {
            if (inputValue.trim()) {
                setItemsArray([...itemsArray, inputValue]);
                setInputValue("");
            }
        }
    };

    const deleteItem = (index) => {
        setItemsArray(itemsArray.filter((_, i) => i !== index));
    };

    return (
        <div className="container w-50 justify-content-center">
            <ul className="list-group border-none">
                <li className="list-group-item">
                    <input
                        type="text" 
                        value={inputValue} 
                        onKeyDown={addArray} 
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </li>
                {itemsArray.map((item, index) => (
                    <li key={index} className="item list-group-item d-flex justify-content-between align-items-center">
                        {item}
                        <button className="btn btn-sm delete-button" onClick={() => deleteItem(index)}>
                            X
                        </button>
                    </li>
                    ))}
                <li className="count list-group-item text-start">{itemsArray.length} items left</li>
            </ul>
        </div>
    );
};

export default List;