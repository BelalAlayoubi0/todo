import React, { useEffect, useState } from "react";

function Add() {
  const [todo, setTodo] = useState([]);


  const submit = (e) => {
    e.preventDefault();
    const todos = {
      id: e.currentTarget?.id.value,
      title: e.currentTarget?.title.value,
      description: e.currentTarget?.description.value,
    }
    if(todos.id.length === 0 || todos.title.length === 0 || todos.description.length === 0 ){
      return alert('enter field')
    }

    let filter = todo.find((item) => item.id === e.currentTarget?.id.value || item.title === e.currentTarget?.title.value)
    if(filter){
      alert('exist')
    }

    else{
      todo.map((a)=>{
        console.log('ss' + todo )
      })
      setTodo((prevState) => {
        const newState = [
          ...prevState,
          todos,
        ];
        localStorage.setItem("todos", JSON.stringify(newState));
        return newState;
      });
     
    }


  };



  useEffect(() => {
    console.log("todotodotodotodo", todo);

  }, [todo]);

  return (
    <div className="Todos">
      <form onSubmit={submit}>
        <input type="text" placeholder="id" name="id" />
        <input type="text" placeholder="title" name="title" />
        <input type="text" laceholder="desc" name="description" />
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default Add;
