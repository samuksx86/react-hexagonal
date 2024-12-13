import { ICreateTask } from "@/services/tasks/create/create-task.types";

type TasksModelProps = {
  createTask: ICreateTask;
};

export function useTasksModel({ createTask }: TasksModelProps) {
  const onSubmit = () => {
    createTask.execute({
      title: "Task 1",
      description: "Description 1",
      status: "OPEN",
    });
  };

  return { onSubmit };
}
