import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import axios from "axios";
import { Todos } from "./Todos";
import { Pagination } from "@mui/material";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(5);

  useEffect(() => {
    async function getTodos() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data);
      setLoading(false);
    }
    getTodos();
  }, []);

  const lastTodosIndex = currentPage + todosPerPage;
  const firstTodosIndex = lastTodosIndex - todosPerPage;
  const currentTodos = todos.slice(firstTodosIndex, lastTodosIndex);
  const todosLength = todos.length;
  const Paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(todosLength / todosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <Stack spacing={2}>
        <Pagination
          count={pageNumbers.length}
          page={currentPage}
          onChange={(_, num: number) => {
            Paginate(num);
          }}
        />
      </Stack>
      <Todos todos={currentTodos} loading={loading} />

      <div style={{ display: "flex", gap: "5px" }}>
        {/* <Pagination
          todosPerPage={todosPerPage}
          todosLength={todosLength}
          paginate={Paginate}
        /> */}
        {pageNumbers.map((number) => {
          return (
            <li style={{ all: "unset", cursor: "pointer" }} key={number}>
              <a
                onClick={() => {
                  Paginate(number);
                }}
              >
                {number}
              </a>
            </li>
          );
        })}
      </div>
    </>
  );
}
