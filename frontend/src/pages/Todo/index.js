import React from "react";

import PageHeader from "../../components/PageHeader";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

const Todo = () => (
    <>
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <TodoForm />
        <TodoList />
    </>
);

export default Todo;
