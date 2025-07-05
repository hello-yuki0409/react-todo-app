import { useState } from "react";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { InputTodo } from "./components/InputTodo";
import "./styles.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncomplateTodos] = useState([]);
  const [completeTodos, setComplateTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    //　削除ボタンが押されたとき、対象の行を消す処理
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncomplateTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    //　完了のTODOをコピー -->最後に対象の行を追加する処理
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncomplateTodos(newIncompleteTodos);
    setComplateTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    // setComplateTodos(newCompleteTodos); <-- テスト
    //　未完了のTODOをコピー -->完了のTODOの対象行を追加する処理
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setComplateTodos(newCompleteTodos);
    setIncomplateTodos(newIncompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText} // todoテキストというprops名でstateのtodoTextを渡している
        onChange={onChangeTodoText} // propsには大体なんでも渡せる
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      {/* 未完了のTODOが5以下で発火 */}
      {isMaxLimitIncompleteTodos && (
        <p style={{ color: "red" }}>登録できるTODOは5個まで！</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
