import useSWR from "swr";
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetcher = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  console.log(data);
  return data;
};

function Page(pageIndex: number) {
  const { data, error } = useSWR(`/api/data?page=${pageIndex}`, fetcher);
  if (error) {
    return <>error</>;
  }
  if (!data) {
    return <>Loading...</>;
  }

  return data.map((item: Todo) => <div key={item.id}>{item.title}</div>);
}

export { Page };
