import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shortid from "shortid";

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  console.log(todos);
  return (
    <>
      <h1>홈입니다.</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodos = {
            id: shortid.generate(),
            title,
            body,
            isDone: false,
          };
          dispatch({ type: "ADD_TODO", payload: newTodos });
        }}
      >
        <label>제목</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label>내용</label>
        <input
          type="text"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></input>
        <button type="submit">추가하기</button>
      </form>
      <div>
        <h2>Working...</h2>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <div key={todo.id}>
                <Link to={`/${todo.id}`}>상세페이지</Link>
                <p>{todo.title}</p>
                <p>{todo.body}</p>
                <button
                  onClick={() => {
                    dispatch({ type: "DELETE_TODO", payload: todo.id });
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "SWITCH_TODO", payload: todo.id });
                  }}
                >
                  완료
                </button>
              </div>
            );
          })}
        <h2>Done.</h2>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <div key={todo.id}>
                <Link to={`/${todo.id}`}>상세페이지</Link>
                <p>{todo.title}</p>
                <p>{todo.body}</p>
                <button
                  onClick={() => {
                    dispatch({ type: "DELETE_TODO", payload: todo.id });
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "SWITCH_TODO", payload: todo.id });
                  }}
                >
                  취소
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
