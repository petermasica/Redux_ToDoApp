import React from "react";

import { ListControls } from "./Lists/ListControls";

export const Lists = ({ lists, removeList }) => {
  const listItems = [];

  for (var key in lists) {
    if (lists.hasOwnProperty(key)) {
      listItems.push(
        <li key={key} data-id={key}>{lists[key]} <ListControls removeList={removeList} /></li>
      );
    }
  }

  return (
    <ul>
      {listItems}
    </ul>
  );
};
