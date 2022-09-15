interface TodosProps {
  todos: Todo[];
  loading: boolean;
}
const Todos = (props: TodosProps) => {
  if (props.loading) {
    return <>loading</>;
  }
  return props.todos.map((todo: Todo) => {
    return <div key={todo.id}>{todo.title}</div>;
  });
};
export { Todos };
