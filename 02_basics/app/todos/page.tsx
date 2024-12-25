import axios from "axios";

export default async function Todos() {
  interface ITodo {
    title: string;
    body: string;
  }

  const todos = await getTodos();

  return (
    <div>
      {todos.map((todo: ITodo, idx: number) => {
        return (
          <div
            key={idx}
            className="m-6 border border-transparent shadow-md p-4"
          >
            <p className="text-sm">Todo no. {idx + 1}</p>
            <h1 className="font-bold">{todo.title}</h1>
            <p>{todo.body}</p>
          </div>
        );
      })}
    </div>
  );
}

async function getTodos() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
}