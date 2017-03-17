import React from "react";

export const ListControls = ({ removeList }) => {
  const removeListById = (e) => {
    e.preventDefault();
    const listId = e.target.parentElement.parentElement.getAttribute("data-id");
    removeList(listId);
  }

  return (
    <span className="listControls">
      <a href="#" onClick={removeListById}>x</a>
    </span>
  );
};
