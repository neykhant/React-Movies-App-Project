//jshint ignore:start
import React from "react";

const ListGroup = (props) => {
  const { items, selectedItem, onItemSelect } = props;

  return (
    <div className="list-group">
      {items.map((item) => (
        <button
          key={item._id}
          className={
            selectedItem === item
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onItemSelect(item)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ListGroup;
