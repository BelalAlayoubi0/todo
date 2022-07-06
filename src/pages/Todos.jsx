

import React, { useEffect, useState } from 'react';



function Todos() {

  const [todo, getTodo] = useState([]);


  useEffect(() => {
    if (localStorage.getItem("todos")) {
      console.log('zz'+todo)
      getTodo(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);
  

  return (
    <div>
     {todo.map((todo) => (
       <div key={todo.id}>
          <span> id : {todo.id}</span>
          <span> title : {todo.title}</span>
          <span> description : {todo.description}</span>
       </div>
      ))}
    </div>
  );
}

export default Todos;
