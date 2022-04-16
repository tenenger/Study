import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer() {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const onCreate = (text) => {
    dispatch(addTodo(text));
  };
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);
  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
