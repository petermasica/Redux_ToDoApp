import React from "react";
import { connect } from "react-redux";

// actions import
import { addTodo } from "../actions/todosActions";
import { addList, removeList } from "../actions/listsActions";

// custom components import
import { AddList } from "../components/Layout cont/AddList";
import { Lists } from "../components/Layout cont/Lists";

let Layout = ({ addList, removeList, lists, addTodo, showAddTodoCont }) => {
  return (
    <div>
      { showAddTodoCont ? <AddList addList={addList} /> : "" }
      { Object.keys(lists).length ? <Lists lists={lists} removeList={removeList} /> : "No lists yet"}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showAddTodoCont: state.showAddTodoCont,
    lists: state.lists
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      const id = Date.now();
      dispatch(addTodo(id, text));
    },
    addList: (listName) => {
      const id = Date.now();
      dispatch(addList(id, listName));
    },
    removeList: (id) => {
      dispatch(removeList(id));
    }
  };
};

Layout = connect(mapStateToProps, mapDispatchToProps)(Layout);
export { Layout };
