import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const handleAdd = () => {
    axios.post(`http://localhost:8080/send`, { text }).then((response) => {
      axios.get(`http://localhost:8080`).then((response) => {
        console.log("response:", response);
        setData(response.data.Todo);
      });
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:8080`).then((res) => {
      setData(res.data.Todo);
    });
  }, []);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        Add
      </button>

      {data.map((el) => {
        return <TodoList key={el.id} {...el} />;
      })}
    </div>
  );
};

export default Todo;
