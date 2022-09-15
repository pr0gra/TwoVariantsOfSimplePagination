interface PaginationProps {
  todosLength: number;
  todosPerPage: number;
}

export function Pagination(props: PaginationProps) {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(props.todosLength / props.todosPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(
    pageNumbers.map((number) => {
      return number;
    })
  );

  return (
    <>
      {pageNumbers.map((number) => {
        return (
          <li style={{ all: "unset", cursor: "pointer" }} key={number}>
            <a
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </a>
          </li>
        );
      })}
    </>
  );
}
