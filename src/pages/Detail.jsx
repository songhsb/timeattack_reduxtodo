import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const param = useParams();
  //   const todo = find((todo) => todo.id === parseInt(param.id));

  return (
    <div>
      {/* <p>{todo.title}</p>
      <p>{todo.body}</p> */}
    </div>
  );
}

export default Detail;
