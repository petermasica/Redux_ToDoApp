import React from "react";

export const AddList = ({ addList }) => {
  let input;

  const addNewList = (e) => {
    e.preventDefault();

    let listName = input.value;

    if (!listName.trim()) {
      return;
    }
    addList(listName);
    input.value = "";
  };

  return (
    <div>
        <input ref={node => {input = node}} placeholder="Enter the name of your list" />
        <a href="#" onClick={addNewList}>+</a>
    </div>
  );
}
