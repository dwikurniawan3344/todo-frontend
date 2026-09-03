import ApiTodoList from "./components/ApiTodoList";
import { todoService } from "@/services/todoService";
import { transformApiTodosToTasks } from "@/lib/tasks";

export default async function ApiTodosPage() {
  // 1. Panggil fetchTodos() (bukan getTodos)
  const response = await todoService.fetchTodos();

  // 2. Transformaikan data ApiTodo[] menjadi TaskItem[] menggunakan adapter lib/tasks
  const initialTasks = transformApiTodosToTasks(response.todos);

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <ApiTodoList initialTasks={initialTasks} />
    </div>
  );
}