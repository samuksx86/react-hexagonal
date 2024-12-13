import { useTasksModel } from "./task.model";

type TasksViewProps = ReturnType<typeof useTasksModel>;

export function TasksView(props: TasksViewProps) {
  const { onSubmit } = props;
  return (
    <div>
      <h1>Tasks</h1>
      <button className="text-white bg-blue-500 p-2 rounded" onClick={onSubmit}>
        TESTE CRIAÇÃO
      </button>
    </div>
  );
}
